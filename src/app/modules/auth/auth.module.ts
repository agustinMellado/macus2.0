import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule, //agrego para bd
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ]
})
export class AuthModule { }
