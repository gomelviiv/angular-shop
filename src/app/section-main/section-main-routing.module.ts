import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionMainComponent } from './section-main.component';

const routes: Routes = [
  {
    path: '',
    component: SectionMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionMainRoutingModule {}
