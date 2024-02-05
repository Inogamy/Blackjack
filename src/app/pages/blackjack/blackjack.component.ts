import { Component } from '@angular/core';

import { shuffle } from 'underscore';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [],
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})
export class BlackjackComponent {
  deck: string[] = [];
  tipos = ['C', 'D', 'H', 'S'];
  especiales = ['A', 'J', 'Q', 'F']
  deckshuffle: string[] = [];

  puntosJugador = 0;
  puntosComputadora = 0;


  constructor() {
    this.crearDeck();
    this.deckshuffle = shuffle(this.deck);
    this.valorCarta('AD');
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
    let valor = carta.substring(0, carta.length - 1)
    let numeroValor = parseInt(valor, 10);

    return (isNaN(numeroValor)) ?
      (valor === 'A') ? 11 : 10
      : numeroValor = numeroValor + 1;
  }


  pedirCarta() {
    let carta = this.deckshuffle.pop()
    if (carta) { // Verifica que carta no sea undefined.
      this.puntosJugador += this.valorCarta(carta); // Usa += para sumar el valor a puntosJugador.
      console.log(this.puntosJugador);
    } else {
      console.log('No hay más cartas en el mazo');
    }
  }



}



