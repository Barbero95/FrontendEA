import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Denuncia } from '../denuncia';
import { Actividad } from '../actividad';

import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';
import { UbicacionGPS } from '../ubicacionGPS';

@Component({
  selector: 'app-crear-denuncias',
  templateUrl: './crear-denuncias.component.html',
  styleUrls: ['./crear-denuncias.component.css']
})
export class CrearDenunciasComponent implements OnInit {
  actividad: Actividad;
  denuncia: Denuncia;
  resumenAdd: string;
  explicacionAdd: string;
  denunciante: "time4time";
  denunciado: string;
  idActividadDenunciada: string;

  obj: ObjetoDeNickYEstado;
  loc: UbicacionGPS;
  loc2: number[];


  tituloAdd: string;
  descripcionAdd: string;
  tagsAdd: string[] = [];
  variable: string = "";
  estrellas: number = 0;
  propietario = "time4time";
  titulo: string;


  //Para alertas
  alert1: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
  this.titulo = this.route.snapshot.paramMap.get('titulo');
  this.actividad = {_id:0,__v:0,titulo:this.titulo, descripcion:this.descripcionAdd, estrellas:0, propietario: "time4time", tags:this.tagsAdd,clientes:[],ubicacion:"Barcelona", location: this.loc2 , habilitada:0};
    
  this.frontendService.getActividadDePropietario(this.actividad).subscribe(data => this.actividad = data);
  this.denunciado = this.actividad.propietario;
  this.idActividadDenunciada =this.titulo;
  }
  postDenuncia(): void{
    console.log(this.denunciado);
    this.denuncia = {_id:0,__v:0,resumen:this.resumenAdd, explicacion:this.explicacionAdd, denunciante: "time4time", denunciado:this.denunciado, idActividadDenunciada:this.idActividadDenunciada};
    this.frontendService.postDenuncia(this.denuncia).subscribe( act => this.goBack(act), err => console.error('Ops: ' + err.message));
    //res => { this.jsonActividad = res.json();}
  }


  goBack(act): void {
    if(!act){
      this.alert1 = true;
    }else{
      this.location.back();
    }
  }
}
