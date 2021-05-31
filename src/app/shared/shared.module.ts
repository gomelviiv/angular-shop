import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { HeaderModule } from './header/header.module';
import { FigureModule } from './figure/figure.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    FigureModule,
  ]
})
export class SharedModule { }
