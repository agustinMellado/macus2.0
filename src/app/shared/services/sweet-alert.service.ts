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
  ingresoUsuario(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenido!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  ingresoIncorrecto(){
    Swal.fire({
      icon: 'error',
      title: 'Datos incorrectos!!!',
      text: 'Compruebe si el correo y contraseña son correctos'
    })
  }
  camposVacios(){
    Swal.fire({
      icon: 'error',
      title: 'Campos vacios!',
      text: 'Por favor rellene los campos con los datos correspondientes'
    })

  }

}
