import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsjComponent } from './msj.component';


@NgModule({
  declarations: [MsjComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    MsjComponent
  ],
})
export class MsjModule { }
