import { Component, OnInit } from '@angular/core';
import { Auth } from 'firebase/auth';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //dialog
    display: boolean = true; //false (si es boton)
/*
  showDialog() {
      this.display = true;
  }
*/
  
  formularioLogin: FormGroup;

//inicializo formulario 
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router,private swAlert:SweetAlertService) { 
    //form bd
    //inicializamos el formulario
    this.formularioLogin = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  iniciarSesion(){
    //si el formulario es valido inicio sesion
    if(!this.formularioLogin.invalid){
      //obtengo esos datos del formulario 
      const {email, password}= this.formularioLogin.value;
      //inicio sesion en firebase llamndo al metodo de mi service
      this.auth.signIn(email, password).then((resp) => {
        // alert("Iniciaste Sesión Correctamente"); //(resp) el navegador tira object Object pero toma al usuario cargado en firebase
        // this.router.navigateByUrl('home'); //si los datos comprobados son correctos ahi podes navegar
        this.swAlert.ingresoUsuario();
        this.router.navigateByUrl('home');
      }).catch((error) =>{
       this.swAlert.ingresoIncorrecto() //(error) el navegador te escribe que error tiene
      })

    }
    else{
      this.swAlert.camposVacios()
    }
  }
}


