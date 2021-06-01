import { Component, OnInit } from '@angular/core';
import { IItemsMainPage } from '@app/core/models/itemsMainPageCatalogModels';
import { articleTile } from './constant';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.scss'],
})
export class OurArticlesComponent implements OnInit {
  heading = 'Лучшие советы по подбору дорогих подарков';
  paragraph = 'Полезные статьи';

  itemsTile: Array<IItemsMainPage> = articleTile;

  constructor() {}

  ngOnInit(): void {}
}
