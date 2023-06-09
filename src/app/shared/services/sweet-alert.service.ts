import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }
  respuestaCorrecta(){
    Swal.fire(
      'Respuesta correcta',
      'Sigamos avanzando!',
      'success'
    )

  }
  respuestaIncorrecta(){
    Swal.fire({
      icon: 'error',
      title: 'Oops... respuesta incorrecta',
      text: 'Volvamos a intentarlo :)',
      //footer: '<a href="">Why do I have this issue?</a>'
    })
  }

}
