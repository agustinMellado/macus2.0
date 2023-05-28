import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from './modules/ruleta/pages/preguntas/preguntas.component';

//rutas
const routes: Routes = [
  {path:'preguntas', component:PreguntasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
