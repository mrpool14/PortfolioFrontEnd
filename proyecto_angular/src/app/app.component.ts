import { Component } from '@angular/core';
import { ServicioDePruebaService } from './servicio-de-prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 nombr:string="";
  constructor(private miservicio:ServicioDePruebaService){
  };
  onclick(){
    this.miservicio.MuestraMensaje()
    
  };
  onclick_2(nombre:string){
    this.miservicio.CambiarNombre(nombre);
  };
  mensaje(){
   alert(this.miservicio.nombre);
  };
  

 
  }



