import { Injectable } from '@angular/core';
import { COLORS } from './colors';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  x: number = 14;
  y: number = 14;
  numOfFields: number = this.x * this.y;
  randomNumbers: number[] = [];
  randomColors: string[] = [];
  clickedColor: string;
  positions: number[][] = [];

  generateNumbers() {
    for(let i = 0; i < this.numOfFields; i++) {
      let number = Math.floor(Math.random() * 6) + 1;
      this.randomNumbers.push(number);
    }
  }

  generatePositions(){
    let x: number[] = Array.from({length: 14}, (i, j) => j + 1);

    for(let i = 0; i < x.length; i++) {
      this.positions.push([1, x[i]]);
      for(let j = 1; j < x.length; j++) {
        this.positions.push([x[j], x[i]])
      }
    }
  }

  parsePosition(position) {
    position.split('').map(n => parseInt(n)).filter(n => n < 15).join('');
    return Number(position);
  }

  generateBoard() {
    this.generatePositions();
    this.generateNumbers();
    
    this.randomNumbers.forEach(i => {
      switch(i) {
        case 1:
          this.randomColors.push(COLORS[0])
          break;
        case 2:
          this.randomColors.push(COLORS[1])
          break;
        case 3:
          this.randomColors.push(COLORS[2])
          break;
        case 4:
          this.randomColors.push(COLORS[3])
          break;
        case 5:
          this.randomColors.push(COLORS[4])
          break;
        case 6:
          this.randomColors.push(COLORS[5])
          break;
        }
    })
  }

  constructor() { }
}
