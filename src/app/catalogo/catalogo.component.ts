import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FrontendService }  from '../frontend.service';
import { Actividad } from '../actividad';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  actividad: Actividad;
  linkNickEstado: ObjetoDeNickYEstado;  
  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location ) { }

  ngOnInit(): void{
    this.actividad = {  
     // _id:2,
     // __v:1,
      titulo:"asd",
      descripcion:"asd",
      estrellas:2,
      tags:["asd"],
      propietario:"asd",
      clientes:[this.linkNickEstado]
      
 }

}
  //Envio usuario para recibir sus actividades
  sendUser(): void{
    this.actividad = {titulo:null, descripcion:null, estrellas:0, propietario: "David", tags:null,clientes:[]}
    this.frontendService.getActividadesPropietario(this.actividad.propietario).subscribe(actividad => this.actividad = actividad);
    //res => { this.jsonActividad = res.json();}
  }
goBack(): void {
  this.location.back();
}
}
