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
  positions = this.service.positions;
  mainField;
  arr: any[] = [];
  arr2: any[] = [];

  getDrenchField() {
    this.mainField = this.divs.first.nativeElement;
    console.log(this.mainField.style.backgroundColor);
    //console.log(this.divs._results[1].nativeElement.style.backgroundPositionX)

    let mainEl = [1,1];
    let elementX = this.mainField.style.backgroundPositionX;
    let elementY = this.mainField.style.backgroundPositionY;
    let br = 1 + Number(elementX.split('').map(n => parseInt(n)).filter(n => n < 15).join(''));
    let gr = Number(elementY.split('').map(n => parseInt(n)).filter(n => n < 15).join(''));
    if((mainEl[0] + 1 === br && mainEl[1] === gr) || (mainEl[0] === br && mainEl[1] + 1 === gr)) {
      console.log('aaaa')
      
    }
    this.arr.push(this.mainField);
  }

  play() {
    for(let i = 0; i < this.arr.length; i++) {
      let xpos = this.arr[i].style.backgroundPositionX;
      let aaa = this.service.parsePosition(xpos);

      console.log(this.service.parsePosition(xpos));
      if(xpos.length < 4 && this.service.clickedColor.toLowerCase() === this.mainField.style.backgroundColor.toLowerCase()) {
        console.log('it will work')
      } else {
        console.log('it wont')
      }
    }
    console.log(this.arr);
    console.log(this.service.clickedColor)
  }

  ngOnInit() {
    this.service.generateBoard();
  }

  ngAfterViewInit(){
    this.getDrenchField();
  }
}