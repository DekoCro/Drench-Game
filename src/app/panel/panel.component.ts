import { COLORS } from './../colors';
import { Component, OnInit, Input } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() play;

  constructor(private service: RandomService) { }

  colors: string[] = COLORS;
  clickedColor: string;
  
  getColor(color: string) {
    this.clickedColor = color;
    this.service.clickedColor = color.toLowerCase();
    if(this.service.moves < 1) {
      alert('Game over motherfucker!')
    } else {
      this.service.moves--;
      this.play
    }
  }

  ngOnInit() {
  }

}
