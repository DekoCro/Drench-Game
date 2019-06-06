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

  getDrenchField() {
    this.mainField = this.divs.first.nativeElement;
    console.log(this.mainField);
  }

  play(){
    this.mainField.innerHTML = "1";
  }

  ngOnInit() {
    this.service.generateBoard();
    console.log(this.randomColors);
    console.log(this.service.randomNumbers);
  }

  ngAfterViewInit(){
    this.getDrenchField();
  }
}