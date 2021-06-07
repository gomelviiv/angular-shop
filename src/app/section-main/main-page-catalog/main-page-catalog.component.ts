import { Component, OnInit } from '@angular/core';

import { ButtonsMainPageCatalog, ItemsMainPage } from '@app/core/models';
import { trackById } from '@app/core/utils';
import { changeCategory } from '@app/root-store/select-category/actions';
import {
  brandSelector,
  eventSelector,
  genderSelector,
} from '@app/root-store/select-category/selectors';
import { Store } from '@ngrx/store';

import { menuTile, menuButton } from './constant';

@Component({
  selector: 'app-main-page-catalog',
  templateUrl: './main-page-catalog.component.html',
  styleUrls: ['./main-page-catalog.component.scss'],
})
export class MainPageCatalogComponent implements OnInit {
  itemsMenuTiles: ItemsMainPage[] = menuTile;
  itemsMenuButtons: ButtonsMainPageCatalog[] = menuButton;
  trackById = trackById;

  constructor(private store$: Store) {}

  changCategory(key: string, payload: number): void {
    this.store$.dispatch(changeCategory({ key, payload }));
  }

  ngOnInit(): void {}
}
