import { COLORS } from './../colors';
import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private service: RandomService) { }

  colors: string[] = COLORS;
  clickedColor: string;
  
  getColor(color: string) {
    this.clickedColor = color;
    this.service.clickedColor = color.toLowerCase();
  }

  ngOnInit() {
  }

}
