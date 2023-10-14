import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../servicio/state.service';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public personajes:any
  
  constructor( 
    private rickymorty: ServicioService){}

  //Componente nace
  ngOnInit(){
    //Muestra en consola los personajes
    this.rickymorty.getCharacters().subscribe((data)=>{
      this.personajes = data
      console.log(data);
    })
  }

  /*grabar(){
    console.log("Ingresando a la funcion")
    const ela={
      text:this.formela.get('text')?.value,
    }
    console.log(ela)
  }

  borrar(){
    //
    this.stateService.cambiarMsj('');
    //
    this.formela.reset();
  }*/
}