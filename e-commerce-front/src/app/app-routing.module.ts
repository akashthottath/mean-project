import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"",component:AllProductsComponent},
  {path:"user/login",component:LoginComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"product/view/:id",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
