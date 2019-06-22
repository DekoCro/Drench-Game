import { ICONS } from './../icons';
import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private service: RandomService) { }
  icons = ICONS;

  getIcon(icon) {
    this.service.icon = icon;
  } 

  ngOnInit() {
  }

}
