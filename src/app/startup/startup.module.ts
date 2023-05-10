import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { AboutStartUpComponent } from './about-start-up/about-start-up.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    AboutStartUpComponent
  ],
  imports: [
    CommonModule,
    StartupRoutingModule,
    SharedModule
  ]
})
export class StartupModule { }
