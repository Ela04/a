import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../servicio/state.service';
import { ServicioService } from '../service/servicio.service';
import { Url } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  formela: FormGroup;
  personajes!: Array;
  constructor(private fb:FormBuilder, private stateService:StateService, private rickymorty: ServicioService){
    this.formela=this.fb.group({
      texto:[""]
    })
  }

  ngOnInit(){
    this.rickymorty.getCharacters().subscribe((res:any)=>{
    }

  }

  grabar(){
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
  }

}
