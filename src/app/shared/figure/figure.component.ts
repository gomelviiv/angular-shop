import { Component, Input, OnInit } from '@angular/core';

import { ItemsMainPage } from '@app/core/models';
import { trackById } from '@app/core/utils';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent implements OnInit {
  @Input() items!: ItemsMainPage[];
  @Input() itemsTile!: ItemsMainPage[];
  trackById = trackById;

  constructor() {}

  ngOnInit(): void {}
}
