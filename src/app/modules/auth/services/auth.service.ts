import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from '@firebase/auth-types';
import { Observable } from 'rxjs';
import { delay } from 'rxjs';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: Observable<any>;
  constructor(private afAuth: AngularFireAuth) {
    this.user= this.afAuth.authState;
  }

  //Este metodo se utiliza para registrar un nuevo usuario con us correo y contraseña
  signUp(email: string, password: string) {
    console.log(email,password);

    //el metodo createUserWithEmailAndPassword crea un nuevo usuario en firebase authentication y devuelve una promesa que resuelve con las credenciales del usuario.
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  isLoggedIn(){
    return of(true).pipe(delay(500));
  }

  //Metodo para cerrar sesion..parametros: no necesitamos 
  logOut(){
    return this.afAuth.signOut();
  }
  
  currentUser(){
    this.afAuth.authState;
  }

  //Este metodo se utiliza para iniciar sesison con un usuario existente utilizando su correo y contraseña
  signIn(email: string, password: string): Promise<UserCredential> {

    //signInWithEmailAndPassword realiza la autenticacion en firebase authentication y devuelve una promesa que se resuelve con las credenciales del usuario.t
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  //este metodo se utiliza para cerrar sesion del usuario actualmente autenticado
  signOut(): Promise<void> {

    //cierra la sesion del usuario y devuelve una promesa vacia
    return this.afAuth.signOut();
  }
}
