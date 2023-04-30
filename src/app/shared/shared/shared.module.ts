import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
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
    MatIconModule
  ]
})
export class SharedModule { }
