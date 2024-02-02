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

  constructor() {
    this.crearDeck();
    console.log('La baraja', this.deck);
    this.deck = shuffle(this.deck);
    console.log(this.deck)
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

}
