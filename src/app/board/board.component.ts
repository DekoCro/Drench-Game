import { COLORS } from './../colors';
import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  unit: string = '27px';
  x: number = 14;
  y: number = 14;
  numOfFields: any = this.x * this.y;
  fields: number[] = [];
  blockColor: string;
  random: number;
  lero: number[] = [];

  constructor(private service: RandomService) {}

  generateBoard() {
    for(let i = 0; i < this.numOfFields; i++) {
      this.fields.push(i);
    }
  }
  gen() {
    for(let i = 0; i < 196; i++) {
      let brandom = Math.floor(Math.random() * 6) + 1;
      this.lero.push(brandom);
    }
  }

  shuffleColors() {
    for(let i = 0; i < this.numOfFields; i++) {
      this.random = Math.floor(Math.random() * 6) + 1;
    }
    switch(this.random) {
      case 1:
        this.blockColor = COLORS[0];
        break;
      case 2:
        this.blockColor = COLORS[1];
        break;
      case 3:
        this.blockColor = COLORS[2];
        break;
      case 4:
        this.blockColor = COLORS[3];
        break;
      case 5:
        this.blockColor = COLORS[4];
        break;
      case 6:
        this.blockColor = COLORS[5];
        break;
      }
  }

  ngOnInit() {
    this.generateBoard();
    this.shuffleColors();
    this.gen();
    console.log(this.lero);
  }
}