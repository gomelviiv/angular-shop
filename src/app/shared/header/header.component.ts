import { Component, OnInit } from '@angular/core';
import { HeaderMenuItems } from '@app/core/models';
import { trackById } from '@app/core/utils';

import { headerItems } from './constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  trackById = trackById;
  menuItems: HeaderMenuItems[] = headerItems;

  constructor() {}

  ngOnInit(): void {}
}
