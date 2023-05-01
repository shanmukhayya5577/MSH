import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { ToopbarComponent } from './toopbar/toopbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ToopbarComponent,
    ToopbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  exports:[
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatIconModule,
    ToopbarComponent,
    SidenavComponent,
    MatListModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
