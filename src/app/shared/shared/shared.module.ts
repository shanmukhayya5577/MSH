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
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
// import { ToastrModule } from 'ngx-toastr';


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
    MatExpansionModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatInputModule
    // ToastrModule

  ],
  exports:[
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatIconModule,
    ToopbarComponent,
    SidenavComponent,
    MatListModule,
    MatExpansionModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatInputModule
    // ToastrModule
  ]
})
export class SharedModule { }
