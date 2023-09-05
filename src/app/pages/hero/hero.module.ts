import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [   
    ListComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
  ]
})
export class HeroModule { }
