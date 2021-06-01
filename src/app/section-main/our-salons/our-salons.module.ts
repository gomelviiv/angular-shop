import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurSalonsComponent } from './our-salons.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [OurSalonsComponent],
  imports: [CommonModule, SharedModule],
  exports: [OurSalonsComponent],
})
export class OurSalonsModule {}
