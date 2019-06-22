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

  restartGame() {
    location.reload();
  }
  
  getColor(color: string) {
    // Getting clicked color and providing it to service
    this.service.clickedColor = color;

    // Statment that checks if you won or lost so it can display the right content
    if(this.service.moves <= 1) {
      (<HTMLElement>document.querySelector('.sideComponents')).style.display = "none";
      (<HTMLElement>document.querySelector('.loss')).style.display = "block";
    } else if (this.service.fields.length <= 1) {
      (<HTMLElement>document.querySelector('.done')).style.display = "block";
      (<HTMLElement>document.querySelector('.mobileAdjustment')).style.display = "none";
    } else {
      this.service.moves--;
      this.play
    }
  }

  ngOnInit() {
  }

}
