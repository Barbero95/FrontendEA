import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FrontendService }  from '../frontend.service';
import { Actividad } from '../actividad';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';
import { config } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  actividad: Actividad;
  lista: Actividad[];
  linkNickEstado: ObjetoDeNickYEstado;  
  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location ) { }

  ngOnInit(): void{
    this.actividad = {titulo:null, descripcion:null, estrellas:0, propietario: "time4time", tags:null,clientes:[],_id:0,__v:0}
    //this.frontendService.getActividadesPropietario(this.actividad).subscribe(listaAct => this.lista = listaAct);
    this.frontendService.getActividadesPropietario(this.actividad).subscribe(data =>  this.lista = data);
  }
  //Envio usuario para recibir sus actividades
  sendUser(): void{
    //this.actividad = {titulo:null, descripcion:null, estrellas:0, propietario: "Time4Time", tags:null,clientes:[]}
    //this.frontendService.getActividadesPropietario(this.actividad).subscribe(actividad => this.actividad = actividad);
    
  }
goBack(): void {
  this.location.back();
}
}
