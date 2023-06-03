import { Component, OnInit } from '@angular/core';

//importacion de modelo y servicio
import { Pregunta } from 'src/app/models/pregunta.model';
import { PreguntasService } from '../../services/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent {
  //Declaracion de variables
  pregunta: Pregunta[] = [];

  constructor(private preguntaService: PreguntasService) {}
  ngOnInit() {
    //nos suscribimos al metodo
    this.preguntaService
      .getPreguntas()
      .subscribe((pregunta) => (this.pregunta = pregunta));
  }
}
