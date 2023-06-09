import { Component, OnInit } from '@angular/core';
import { Auth } from 'firebase/auth';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //dialog
    display: boolean = true; //false (si es boton)
/*
  showDialog() {
      this.display = true;
  }
*/
  
formularioRegistrar: FormGroup;

//inicializo formulario 
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router) { 
    //form bd
    //inicializamos el formulario
    this.formularioRegistrar = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  //CONTRASEÑAS DE 6 DIGITOS (ari1997)
  registrar(){
    //si el formulario es valido inicio sesion
    if(!this.formularioRegistrar.invalid){
      //obtengo esos datos del formulario 
      const {email, password}= this.formularioRegistrar.value;
      //inicio sesion en firebase llamndo al metodo de mi service
      this.auth.signUp(email, password).then((resp) => {
        alert("Registro realizado, iniciando sesion.."); //(resp) el navegador tira object Object pero toma al usuario cargado en firebase
        this.router.navigateByUrl('home'); //si los datos comprobados son correctos ahi podes navegar
      }).catch((error) =>{
        alert("Datos Incorrectos, verifique que el usuario exista") //(error) el navegador te escribe que error tiene
      })

    }
    else{
      alert("Revise los datos, son incorrectos");
    }
  }
}


