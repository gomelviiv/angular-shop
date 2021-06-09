import { Injectable } from '@angular/core';
import axios from 'axios';

import { mainURL } from '@core/constants';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  public async sortByCategory(
    gender: number,
    brand?: number,
    season?: number,
    types?: number,
    event?: number,
    sorting?: number
  ) {
    axios.get(`${mainURL}?
    gender.value=${gender}&
    brand.value=${brand}&
    season.value=${season}&
    types.value=${types}&
    event.value=${event}&
    sorting.value=${sorting}&
    `);
  }
}
