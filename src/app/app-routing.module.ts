import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegistroComponent } from './modules/auth/pages/registro/registro.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

//rutas
const routes: Routes = [
    {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'home', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
