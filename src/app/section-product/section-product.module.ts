import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionProductComponent } from './section-product.component';
import { SharedModule } from '@app/shared/shared.module';
import { SectionProductRoutingModule } from './section-product-routing.module';

@NgModule({
  declarations: [SectionProductComponent],
  imports: [SharedModule, SectionProductRoutingModule],
})
export class SectionProductModule {}
