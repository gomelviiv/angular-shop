import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionCatalogComponent } from './section-catalog/section-catalog.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: SectionCatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
