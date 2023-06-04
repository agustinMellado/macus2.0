import { Component } from '@angular/core';
//importacion de modelo y servicio
import { Pregunta } from 'src/app/models/pregunta.model';
import { PreguntasService } from '../../services/preguntas.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent {
  //Declaracion de variables
  pregunta: Pregunta[] = [];
  numeroAleatorio = this.generarNumeroAleatorio(0, 4);

  recargarPregunta: number = 0;
  // contador=0;

  constructor(
    private preguntaService: PreguntasService,
    private SweetAlert: SweetAlertService
  ) {}
  ngOnInit() {
    //nos subscribimos
    this.preguntaService
      .getPreguntas()
      .subscribe((pregunta) => (this.pregunta = pregunta));

  }
  
  //funcion para generar un numero aleatorio
  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(min + Math.random() * max);
  }

  btnRespuesta(respuesta: boolean) {
    if (respuesta) {
      this.SweetAlert.respuestaCorrecta();
      //actualizamos pregunta
      this.actualizarPregunta();
      // this.contador++
    } else {
      this.SweetAlert.respuestaIncorrecta();
    }
  }

  actualizarPregunta() {
    //efectuamos una suma para generar un cambio de valor y actualizar
    this.recargarPregunta += 1;
  }
}
