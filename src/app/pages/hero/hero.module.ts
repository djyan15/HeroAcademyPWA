import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/pages/navbar/navbar.component';


@NgModule({
  declarations: [   
    ListComponent,
    FormComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
  ]
})
export class HeroModule { }
