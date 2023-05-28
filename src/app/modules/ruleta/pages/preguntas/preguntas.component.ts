import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  
  pregunta: string;
  resp1: string;
  resp2: string;
  resp3: string;
  constructor(){
    this.pregunta='¿Qué son los órganos sexuales externos femeninos?';
    this.resp1=' El pene y los testículos';
    this.resp2='El clítoris y los labios vaginales ';
    this.resp3=' La vagina y el útero';
  }
  ngOnInit() {
  }
 preguntas(){


  this.resp1='hola';
  }

}
