import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryState } from '@app/root-store/select-category/state';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { mainURL } from '../constants';
import { ProductCard } from '../models/productCardModel';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  response$!: ProductCard[];

  constructor(private http: HttpClient) {}

  getProductCards(category?: any): Observable<ProductCard[]> {
    return this.http
      .get(
        `${mainURL}?${
          category.brand != undefined ? `brand.value=${category.brand}&` : ''
        }
        `
      )
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  getProductCardById(id: number): Observable<ProductCard> {
    return this.http.get(`${mainURL}/${id}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
