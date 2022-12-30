import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDePruebaService {


  ;

  constructor() { };
  nombre:string="fsdfsdf";
    MuestraMensaje(){
      

      alert("hello world");

      console.log("hello world");};

    CambiarNombre(nombre:string){
      nombre= "nombre";
    };

}

