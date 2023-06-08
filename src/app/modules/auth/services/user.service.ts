import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs'; //programacion reactiva
import {map} from 'rxjs/operators';
import { User } from 'src/app/modules/auth/models/user.interface';

@Injectable({
  
  providedIn: 'root'
})
export class UserService {
  public usuarios! : Observable <User[ ]>//signo (?) nos dice que es de este tipo o undefined - (!) solo nos dice que sera de este tipo
  public userCollection! : AngularFirestoreCollection<User> //signo de almiración xq puede ser nulo (sino tira error)

  constructor(private db: AngularFirestore) { 
    this.userCollection = db.collection<User>('usuarios'); //.collection(db,'usuarios') (traigo todos los usuarios)
    console.log(this.userCollection);
    this.obtenerUsuarios(); //obetiene los usuarios de la base de datos
  }

  //getUsuarios:Observable<User>{ //que nos diga los cambios que hay en tiempo real(técnica Polling buscar) (websocket buscar)
  obtenerUsuarios(){ //obtienene la coleecion de usaurios que tengo en la base de datos y se la asigno a  la propiedad obtenerUsuarios (dentro de obtenerUsuarios tengo toda la coleccion de usuarios)
    this.usuarios = this.userCollection.snapshotChanges().pipe( //captura los cambios que se realizan en la base de datos
      map(action => action.map(a => a.payload.doc.data() as User)) //coleccion de usuarios(?
      //map: (operador se usa con un "pipe")
      //payload: accedes a info que nos interesa
    )
  }

  deleteUsuarios(idUser: string){//eliminamos siempre por ID ya que es unico 
    this.userCollection.doc(idUser).delete();
  }

  createUsuarios(){
      
  }

  updateUsuarios(){

  }
}
