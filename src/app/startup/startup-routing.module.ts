import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutStartUpComponent } from './about-start-up/about-start-up.component';

const routes: Routes = [
  {
    path:'startup',component:AboutStartUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupRoutingModule { }
