import { Component, Input, OnInit } from '@angular/core';

import { ItemsMainPage } from '@app/core/models';
import { trackByIden } from '@app/core/utils';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent implements OnInit {
  @Input() items: Array<ItemsMainPage> | undefined;
  @Input() itemsTile: Array<ItemsMainPage> | undefined;
  trackByIden = trackByIden;

  constructor() {}

  ngOnInit(): void {}
}
