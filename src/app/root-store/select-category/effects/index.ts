import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as CategotyActions from '../actions';

@Injectable()
export class CategoryEffects {
  //   public changeCategory$ = createEffect(() =>(
  //     )

  constructor(private _actions$: Actions) {}
}
