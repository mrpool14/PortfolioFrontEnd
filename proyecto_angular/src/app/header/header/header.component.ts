import { Component } from '@angular/core';
import { ServicioDePruebaService } from 'src/app/servicio-de-prueba.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private miservicio:ServicioDePruebaService){
  };
  onclick(){
    this.miservicio.MuestraMensaje()
  };
  mensaje(){
    alert(this.miservicio.nombre);

};}
