import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '././componentes/home-page/home-page.component';
import { NavbarComponent } from '././componentes/navbar/navbar.component';
import { RegisterPageComponent } from '././componentes/register-page/register-page.component';
import { LoginPageComponent } from '././componentes/login-page/login-page.component';
import { PrivadaPageComponent } from '././componentes/privada-page/privada-page.component';
import { NotFoundPageComponent } from '././componentes/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'privada', component: PrivadaPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
