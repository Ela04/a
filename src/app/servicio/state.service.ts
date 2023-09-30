import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  //Nueva variable
  text: BehaviorSubject<string> = new BehaviorSubject(''); //esta vacia
  //Funcion cambia variable por msj nuevo
  cambiarMsj(text:string){
     this.text.next(text);
  }

  //Obtiene msj vacio
  obtenerMsj(){
    return this.text.asObservable();
  }

  constructor() { }
}