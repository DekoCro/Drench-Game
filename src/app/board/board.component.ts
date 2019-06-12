import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChildren('divs') divs: QueryList<any>;

  constructor(private service: RandomService) {}
  
  randomColors: string[] = this.service.randomColors;
  positions = this.service.positions;

  randomFields = this.divs;
  mainField;
  drenchFields: any[] = [];
  mixedFields: any[] = [];

  play() {
    for(let i = 0; i < this.drenchFields.length; i++) {

      let drenchX: number = this.service.parsePosition(this.drenchFields[i].style.backgroundPositionX);
      let drenchY: number = this.service.parsePosition(this.drenchFields[i].style.backgroundPositionY);

      console.log(this.mixedFields.length - this.drenchFields.length);

      if(this.service.clickedColor !== undefined) {

        for(let i = 0; i <= this.mixedFields.length - 1; i++) {

          let mixedX: number = this.service.parsePosition(this.mixedFields[i].style.backgroundPositionX);
          let mixedY: number = this.service.parsePosition(this.mixedFields[i].style.backgroundPositionY);

          let condition1 = drenchX + 1 === mixedX && drenchY === mixedY && this.mixedFields[i].style.backgroundColor === this.service.clickedColor;
          let condition2 = drenchX  === mixedX && drenchY + 1 === mixedY && this.mixedFields[i].style.backgroundColor === this.service.clickedColor;
          let condition3 = drenchX - 1 === mixedX && drenchY === mixedY && this.mixedFields[i].style.backgroundColor === this.service.clickedColor;
          let condition4 = drenchX === mixedX && drenchY - 1 === mixedY && this.mixedFields[i].style.backgroundColor === this.service.clickedColor;
          let conditionalArray: boolean[] = [condition1, condition2, condition3, condition4];
  
          for(let c in conditionalArray){
            if(conditionalArray[c]) {

              this.drenchFields.push(this.mixedFields[i]);

              // This loop changes color of drenched fields to clicked color.
              for(let j = 0; j < this.drenchFields.length; j++) {
                this.drenchFields[j].style.backgroundColor = this.service.clickedColor;
              }
              // Using indexOf we detect the element that we drenched and then we splice it from array
              let index = this.mixedFields.indexOf(this.mixedFields[i])
              if (index > - 1) {
                this.mixedFields.splice(index, 1);
              }
              // If all the fields are drenched, game completed
              if(this.mixedFields === []) {
                for(let o = 0; o < this.drenchFields.length; o++) {
                  this.drenchFields[o].style.backgroundColor = "black";
                }
              }
            }
          }
        }
      }
    }
  }

  ngOnInit() {
    this.service.generateBoard();
    this.play();
    // TODO: on BoardComponent Init we need to detect elements around our main field to push them into same array straight away
  }

  ngAfterViewInit(){
    // Selecting top left field as my main field and storing it into array
    this.mainField = this.divs.first.nativeElement;
    this.drenchFields.push(this.mainField);

    this.divs.forEach(div => this.mixedFields.push(div.nativeElement));
    this.mixedFields.shift();
  }
}