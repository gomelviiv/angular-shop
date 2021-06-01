import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurArticlesComponent } from './our-articles.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [OurArticlesComponent],
  imports: [CommonModule, SharedModule],
  exports: [OurArticlesComponent],
})
export class OurArticlesModule {}
