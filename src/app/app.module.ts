import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuletaModule } from './modules/ruleta/ruleta.module';
import { HomeModule } from './modules/home/home.module';
import{AuthModule} from './modules/auth/auth.module';

//importacion para poder hacer uso de las peticiones y consumir jsonserver
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    RuletaModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
