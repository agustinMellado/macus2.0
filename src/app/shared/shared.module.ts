import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecargaDirective } from './directives/recarga.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    RecargaDirective
  ],
  exports:[
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
