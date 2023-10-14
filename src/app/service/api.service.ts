import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class apiService {
  constructor(private http: HttpClient) {}

  //OBTENER PERSONAJES
  getCharacters(){
    //retorna todos los personajes
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
