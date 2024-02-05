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


  constructor() {
    this.crearDeck();
    console.log(`La baraja ${this.deck}`);
    this.deckshuffle = shuffle(this.deck);
    console.log(`La baraja combinada ${this.deckshuffle}`)
    this.pedirCarta()
    this.valorCarta('JD');
  }

  crearDeck(){
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

  pedirCarta(){
    let carta = this.deckshuffle.pop()
    console.log(`la carta es: ${carta}`)
    console.log(`la carta es: ${this.deckshuffle}`)
  }

  valorCarta(carta: string){
    let valor = carta.substring(0, carta.length - 1)

    let numeroValor = parseInt(valor, 10);

    console.log({ valor })

    return (isNaN(numeroValor)) ?
      ( valor === 'A') ? 11 : 10
      : numeroValor = numeroValor + 1

    }



  }



