import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FigureModule } from './figure/figure.module';
import { SectionTextModule } from './section-text/section-text.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, SectionTextModule, FigureModule],
})
export class SharedModule {}
