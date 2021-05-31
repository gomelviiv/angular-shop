import { Component,Input, OnInit } from '@angular/core';

import { IItemMainPageCatalog } from '@app/core/models/itemsMainPageCatalog'


@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit { 
  @Input() items:Array<IItemMainPageCatalog> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
