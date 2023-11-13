import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CurrenyDetailsComponent } from './curreny-details/curreny-details.component';

const routes: Routes = [
  {path: "" , component: LandingComponent},
  {path:"currency-details/:currency",  component: CurrenyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
