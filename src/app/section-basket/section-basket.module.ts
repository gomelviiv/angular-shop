import { NgModule } from '@angular/core';

import { SectionBasketRoutingModule } from './section-basket-routing.module';
import { SectionBasketComponent } from './section-basket.component';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderBasketComponent } from './header-basket/header-basket.component';
import { BodyBasketComponent } from './body-basket/body-basket.component';
import { BottomBasketComponent } from './bottom-basket/bottom-basket.component';

@NgModule({
  declarations: [SectionBasketComponent, HeaderBasketComponent, BodyBasketComponent, BottomBasketComponent],
  imports: [SharedModule, SectionBasketRoutingModule],
})
export class SectionBasketModule {}
