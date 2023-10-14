import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //libreria

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  //OBTENER PERSONAJES
  getCharacters():Observable<any>{
    //retorna todos los personajes
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
