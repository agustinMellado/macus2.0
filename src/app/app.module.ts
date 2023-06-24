import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RuletaModule } from './modules/ruleta/ruleta.module';
import { HomeModule } from './modules/home/home.module';
import{AuthModule} from './modules/auth/auth.module';
//importacion para poder hacer uso de las peticiones y consumir jsonserver
import { HttpClientModule } from '@angular/common/http';
import { RuletaComponent } from './ruleta/ruleta.component';

@NgModule({
  declarations: [AppComponent, RuletaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    RuletaModule,
    HttpClientModule,
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
