import { Component, OnInit } from '@angular/core';

import { ItemsMainPage } from '@app/core/models/itemsMainPageCatalogModels';
import { articleTile } from './constant';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.scss'],
})
export class OurArticlesComponent implements OnInit {
  heading = 'Лучшие советы по подбору дорогих подарков';
  paragraph = 'Полезные статьи';

  itemsTile: Array<ItemsMainPage> = articleTile;

  constructor() {}

  ngOnInit(): void {}
}
