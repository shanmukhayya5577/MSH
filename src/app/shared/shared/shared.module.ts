import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { ToopbarComponent } from './toopbar/toopbar.component';


@NgModule({
  declarations: [
    ToopbarComponent,
    ToopbarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatIconModule,
    ToopbarComponent
  ]
})
export class SharedModule { }
