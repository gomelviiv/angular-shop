import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInformationComponent } from './main-information.component';



@NgModule({
  declarations: [MainInformationComponent],
  imports: [
    CommonModule
  ],
  exports: [MainInformationComponent]
})
export class MainInformationModule { }
