import { Component, Inject } from '@angular/core';

//importacion de modelo y servicio
import { Pregunta } from 'src/app/models/pregunta.model';
import { PreguntasService } from '../../services/preguntas.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent {
  //Declaracion de variables
  pregunta: Pregunta[] = [];
  numeroAleatorio = this.generarNumeroAleatorio(0, 4);
  loadingController: any;
 // contador=0;
  

  constructor(private preguntaService: PreguntasService, private SweetAlert: SweetAlertService) {}
  ngOnInit() {
    //nos suscribimos al metodo
    this.preguntaService
      .getPreguntas()
      .subscribe((pregunta) => (this.pregunta = pregunta));
  }

  //funcion para generar un numero aleatorio
  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(min+ Math.random() *  max)
  }



  btnRespuesta(respuesta:boolean){

    if(respuesta){

      this.SweetAlert.respuestaCorrecta()
     // this.contador++
    
    }else{
      this.SweetAlert.respuestaIncorrecta()
    }
  }


  
  // btnCorrecto(){
  //   this.SweetAlert.respuestaCorrecta()
  // }


  // btnIncorrecto(){
  //   this.SweetAlert.respuestaIncorrecta()
  // }


}
