import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionCatalogComponent } from './section-catalog.component';

const routes: Routes = [{ path: '', component: SectionCatalogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionCatalogRoutingModule {}
