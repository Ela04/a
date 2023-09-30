import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../servicio/state.service';

@Component({
  selector: 'app-msj',
  templateUrl: './msj.component.html',
  styleUrls: ['./msj.component.scss'],
})
export class MsjComponent  implements OnInit {
//public msj$!: Observable<string>  //
  public msj!: string 

  constructor(private state: StateService) { }

  ngOnInit() {
    //this.msj$ = this.state.obtenermsj();
    this.state.obtenerMsj().subscribe((msj)=>{
      debugger;
    })
  }
   
}
