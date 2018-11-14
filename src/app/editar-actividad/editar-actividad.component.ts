import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Actividad } from '../actividad';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';
import { UbicacionGPS } from '../ubicacionGPS';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css']
})
export class EditarActividadComponent implements OnInit {

  actividad: Actividad;
  tituloAdd: string;
  descripcionAdd: string;
  tagsAdd: string[] = [];
  variable: string = "";
  estrellas: number = 0;
  propietario = "time4time";
  obj: ObjetoDeNickYEstado;
  loc: UbicacionGPS;
  loc2: number[];
  
  constructor(
    protected localStorage: LocalStorage,
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) { }
  
  ngOnInit() {
    let titulo = this.route.snapshot.paramMap.get('titulo');
    this.actividad = {_id:0,__v:0,titulo:titulo, descripcion:this.descripcionAdd, estrellas:0, propietario: "time4time", tags:this.tagsAdd,clientes:[],ubicacion:"Barcelona", location: this.loc2};
    
   this.frontendService.getActividadDePropietario(this.actividad).subscribe(data => this.actividad = data);
  }

 
  goSave(): void{
    this.frontendService.updateActividad(this.actividad).subscribe(() => this.goBack());
    //this.location.back;
  }

  addTag(): void {
    this.actividad.tags.push(this.variable);
    this.variable = "";
  }
  deleteTag(): void {
    this.actividad.tags.pop();
  }

  goBack(): void {
    this.location.back();
  }

}
