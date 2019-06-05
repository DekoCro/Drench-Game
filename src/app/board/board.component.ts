import { COLORS } from './../colors';
import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private service: RandomService) {}

  randomColors: string[] = this.service.randomColors;

  ngOnInit() {
    this.service.generateNumbers();
    this.service.generateBoard();
    
    console.log(this.randomColors);
    console.log(this.service.randomNumbers);
  }
}