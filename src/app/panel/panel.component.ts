import { COLORS } from './../colors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  colors: string[] = COLORS;
  clickedColor;

  getColor(color: string) {
    this.clickedColor = color;
    console.log(this.clickedColor);
  }

  ngOnInit() {
  }

}
