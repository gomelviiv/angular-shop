import { Component, OnInit } from '@angular/core';

import { ItemsMainPage } from '@app/core/models';
import { articleTile } from './constant';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.scss'],
})
export class OurArticlesComponent implements OnInit {
  itemsTile: ItemsMainPage[] = articleTile;

  constructor() {}

  ngOnInit(): void {}
}
