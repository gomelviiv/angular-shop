import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./section-main/section-main.module').then(
        (m) => m.SectionMainModule
      ),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./section-catalog/section-catalog.module').then(
        (m) => m.SectionCatalogModule
      ),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./section-basket/section-basket.module').then(
        (m) => m.SectionBasketModule
      ),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./section-product/section-product.module').then(
        (m) => m.SectionProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
