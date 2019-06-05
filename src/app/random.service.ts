import { Injectable } from '@angular/core';
import { COLORS } from './colors';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  allColors = COLORS;
  andom: number;
  randomNumbers: number[] = [];

  shuffleColors() {
    for(let i = 0; i < 196; i++) {
      let number = Math.floor(Math.random() * 6) + 1;
      this.randomNumbers.push(number);
    }
  }

  constructor() { }
}
