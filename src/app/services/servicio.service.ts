import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private personajes:BehaviorSubject<any> = new BehaviorSubject(null);
  private personaje:BehaviorSubject<any> = new BehaviorSubject(null);

  //almacenar personajes
  setPersonajes(dataPersonajes:any){
    this.personajes.next(dataPersonajes);
  }

  //Retorna el valor
  getPersonajes(){
    return this.personajes.asObservable();
  }

  //almacenar personaje
  setPersonaje(dataPersonajes:any){
    this.personaje.next(dataPersonajes);
  }

  //Retorna el valor
  getPersonaje(){
    return this.personaje.asObservable();
  }

  constructor() { }
}
