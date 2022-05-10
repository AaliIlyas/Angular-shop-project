import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'store', component: ProductsPageComponent},
  { path: 'store/:id', component: ProductDetailsComponent},
  { path: 'signup', component: SignupComponent}, //TODO - add guard being logged in
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
