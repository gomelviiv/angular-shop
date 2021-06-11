import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionProductComponent } from './section-product.component';

const routes: Routes = [
  {
    path: '',
    component: SectionProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionProductRoutingModule {}
