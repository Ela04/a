import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public detalle:any
  constructor(
    private serv:ServicioService
  ){}

  ngOnInit() {
    this.serv.getPersonaje().subscribe((pers)=>{
      this.detalle = pers;
    })
  }

}
