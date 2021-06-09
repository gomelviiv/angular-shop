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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
