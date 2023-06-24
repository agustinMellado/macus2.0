import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuletaModule } from '../ruleta/ruleta.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Ruleta6a12Component } from '../ruleta/pages/ruleta6a12/ruleta6a12.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RuletaModule
    
  ]
})
export class HomeModule { }
