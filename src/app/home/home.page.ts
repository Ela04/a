import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../service/api.service';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public personajes:any
  
  constructor( 
    private rickymorty: apiService,
    private router: Router,
    private servi: ServicioService
  ){}

  //Componente nace
  ngOnInit(){
    //Muestra en consola los personajes
    this.rickymorty.getCharacters().subscribe((data)=>{
      this.personajes = data
      console.log('si',data);
    })
  }

  //Link a detaller
  IrADetalle(){
    this.servi.setPersonaje(this.personajes);
    this.router.navigateByUrl('/detalle');
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