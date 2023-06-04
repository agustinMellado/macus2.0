import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  onSubmit() {
    // Aquí puedes realizar la lógica de autenticación
    // Por ejemplo, puedes enviar los datos al servidor para verificar las credenciales

    if (this.email === 'usuario' && this.password === 'contraseña') {
      // Si las credenciales son válidas, puedes redirigir al usuario a otra página
      // Por ejemplo, puedes utilizar el enrutador de Angular para navegar a una página de inicio
    } else {
      // Si las credenciales son inválidas, puedes mostrar un mensaje de error
    }
  }
}