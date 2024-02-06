import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { shuffle } from 'underscore';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [],
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent {

  @ViewChild('divCartasJugador') divCartasJugador!: ElementRef<HTMLDivElement>;
  @ViewChild('divCartasComputadora') divCartasComputadora!: ElementRef<HTMLDivElement>;


  deck: string[] = [];
  tipos = ['C', 'D', 'H', 'S'];
  especiales = ['A', 'J', 'Q', 'K']
  deckshuffle: string[] = [];

  puntosJugador = 0;
  puntosComputadora = 0;

  puedePedirCarta: boolean = true;
  detenerCartas: boolean = true

  constructor(private renderer: Renderer2) {
    this.crearDeck();
    this.deckshuffle = shuffle(this.deck);
    console.log(this.deckshuffle)
  }

  crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of this.tipos) {
        this.deck.push(i + tipo)
      }
    }

    for (let tipo of this.tipos) {
      for (let esp of this.especiales) {
        this.deck.push(esp + tipo)
      }
    }
  }

  valorCarta(carta: string) {
    let valor = carta.substring(0, carta.length - 1);
    return isNaN(parseInt(valor)) ? (valor === 'A' ? 11 : 10) : parseInt(valor);
  }


  agregarCartaAlDOM(carta: string, jugador: 'jugador' | 'computadora') {
    const contenedor = jugador === 'jugador' ? this.divCartasJugador.nativeElement : this.divCartasComputadora.nativeElement;
    const imgCarta = this.renderer.createElement('img');
    this.renderer.setAttribute(imgCarta, 'src', `assets/cartas/${carta}.png`);
    this.renderer.addClass(imgCarta, 'carta');
    this.renderer.appendChild(contenedor, imgCarta);
  }



  pedirCartaJugador() {
    let carta = this.deckshuffle.pop();
    if (carta) {
      this.puntosJugador += this.valorCarta(carta);
      console.log(this.puntosJugador);

      this.agregarCartaAlDOM(carta, 'jugador')

      if (this.puntosJugador > 21) {
        this.puedePedirCarta = false
        this.pedirCartaComputadora(this.puntosJugador)
        // setTimeout(() => alert('Perdiste'), 1000);
        this.detenerCartas = false
      } else if (this.puntosJugador === 21) {
        setTimeout(() => alert('21, Ganaste'), 1000);
        this.puedePedirCarta = false
      }
    } else {
      console.log('No hay más cartas en el mazo');
    }
  }

  pedirCartaComputadora(puntosminimos: number) {
    do {
      let carta = this.deckshuffle.pop();
      if (carta) {
        this.puntosComputadora += this.valorCarta(carta);
        console.log(this.puntosComputadora);

        this.agregarCartaAlDOM(carta, 'computadora')

        if (this.puntosComputadora > 21) {
          setTimeout(() => alert(`Ganaste la computadora saco ${this.puntosComputadora}`), 500)
        } else if (this.puntosComputadora === 21) {
          setTimeout(() => alert('21, Ganaste'), 1000);
        }
      } else {
        console.log('No hay más cartas en el mazo');
      }
      if (puntosminimos > 21) {
        break
      }
    } while ((this.puntosComputadora < puntosminimos) && (puntosminimos <= 21));

    if (puntosminimos === this.puntosComputadora) {
      setTimeout(() => alert('Nadie gana'), 500)

    } else if (puntosminimos > 21) {
      setTimeout(() => alert('computadora gana'), 500)
    }

  }

  finalizarTurno() {
    this.detenerCartas = false;
    this.puedePedirCarta = false;
    this.pedirCartaComputadora(this.puntosJugador);
    if ((this.puntosJugador < this.puntosComputadora) && (this.puntosJugador < 21) && (this.puntosComputadora < 21)) {
      setTimeout(() => alert(`Perdiste solo tienes ${this.puntosJugador} puntos y la computadora se acerco mas a 21 con ${this.puntosComputadora}`), 500)
    }
  }

  juegoNuevo() {
    this.detenerCartas = true;
    this.puedePedirCarta = true;
    this.puntosJugador = 0;
    this.puntosComputadora = 0;
    this.limpiarElemento(this.divCartasComputadora.nativeElement);
    this.limpiarElemento(this.divCartasJugador.nativeElement);
  }

  limpiarElemento(elemento: HTMLElement) {
    while (elemento.firstChild) {
      this.renderer.removeChild(elemento, elemento.firstChild);
    }
  }

}



