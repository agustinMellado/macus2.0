import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Pregunta } from 'src/app/models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  //declaracion de variable que hace referencia a la Api
  private apiUrl= 'http://localhost:3000/preguntas'
  constructor(private http: HttpClient) {}


  //metodo para obtener preguntas
  getPreguntas():Observable<Pregunta[]>{
    return this.http.get<Pregunta[]>(this.apiUrl)
  }
}
