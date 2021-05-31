import { Component, OnInit } from '@angular/core';
import { IItemMainPageCatalog } from '@app/core/models/itemsMainPageCatalog'

const menuTile = [
  {
    img: '../../../../assets/images/ring.png',
    description: 'Кольца',
  },
  {
    img: '../../../../assets/images/sergi.png',
    description: 'серьги',
  },
  {
    img: '../../../../assets/images/podveski.png',
    description: 'подвески',
  },
  {
    img: '../../../../assets/images/ring.png',
    description: 'запонки',
  },
  {
    img: '../../../../assets/images/braslet.png',
    description: 'браслеты',
  },
  {
    img: '../../../../assets/images/clocks.png',
    description: 'часы',
  },
];

const menuButton = [
  {
    text: 'свадьба',
    // event: () => SetEvent(1),
  },
  {
    text: 'мужу',
    // event: () => SetGender(1),
  },
  {
    text: 'жене',
    // event: () => SetGender(0),
  },
  {
    text: 'партнеру',
    // event: () => SetGender(2),
  },
  {
    text: 'кольцо',
    // event: () => SetType(0),
  },
  {
    text: 'лето',
    // event: () => SetSeason(1),
  },
];


@Component({
  selector: 'app-main-page-catalog',
  templateUrl: './main-page-catalog.component.html',
  styleUrls: ['./main-page-catalog.component.scss']
})
export class MainPageCatalogComponent implements OnInit {

  itemsMenu:Array<IItemMainPageCatalog> = menuTile

  constructor() { }

  ngOnInit(): void {
  }

}
