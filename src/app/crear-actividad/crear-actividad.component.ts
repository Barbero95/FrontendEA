import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Actividad } from '../actividad';
import { FrontendService }  from '../frontend.service';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {
  actividad: Actividad;
  tituloAdd: string;
  descripcionAdd: string;
  tagsAdd: string[];
  estrellas: number = 0;
  propietario: "Time4Time";
  status: string;
  obj: ObjetoDeNickYEstado;


  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  //crear actividad
  postActivity(): void{
    this.actividad = {_id:0,__v:0,titulo:this.tituloAdd, descripcion:this.descripcionAdd, estrellas:0, propietario: "time4time", tags:this.tagsAdd,clientes:[]}
    this.frontendService.postActividad(this.actividad).subscribe(() => this.goBack());
    //res => { this.jsonActividad = res.json();}
  }


  goBack(): void {
    this.location.back();
  }
}
