import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() field: string;
  @ViewChildren('divs') divs: QueryList<any>;

  constructor(private service: RandomService) {}
  
  randomColors: string[] = this.service.randomColors;
  mainField;
  positions = [];

  getDrenchField() {
    this.mainField = this.divs.first.nativeElement;
    console.log(this.mainField.style.backgroundColor);
    //console.log(this.divs._results[1].nativeElement.style.backgroundPositionX)
    console.log();
  }

  generatePositions(){
    let x: number[] = [];
    for(let num = 1; num <= 14; num++){
      x.push(num);
    }

    for(let i = 0; i < x.length; i++) {
      this.positions.push([1, x[i]]);
      for(let j = 1; j < x.length; j++) {
        this.positions.push([x[j], x[i]])
      }
    }
  }

  play(){
    this.mainField.innerHTML = "1";
  }

  ngOnInit() {
    this.service.generateBoard();
    this.generatePositions();
    console.log(this.positions);
    console.log(this.randomColors);
    console.log(this.service.randomNumbers);
  }

  ngAfterViewInit(){
    this.getDrenchField();
  }
}