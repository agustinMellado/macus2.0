import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { Ruleta6a12Component } from './pages/ruleta6a12/ruleta6a12.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PreguntasComponent,
    Ruleta6a12Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class RuletaModule { }
