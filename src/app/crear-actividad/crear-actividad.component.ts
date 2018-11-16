import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Actividad } from '../actividad';
import { FrontendService }  from '../frontend.service';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';
import { UbicacionGPS } from '../ubicacionGPS';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {
  actividad: Actividad;
  tituloAdd: string = "";
  descripcionAdd: string = "";
  tagsAdd: string[] = [];
  variable: string = "";
  estrellas: number = 0;
  propietario = "time4time";
  obj: ObjetoDeNickYEstado;
  loc: UbicacionGPS;
  loc2: number[];
  //geo: {lat:124,lng:124};
  geo: UbicacionGPS;

  //Para alertas
  alert1: boolean = false;
  alert2: boolean = false;
  alert3: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
    //this.loc = {type: 'Point', coordinates: [124,124]}
    this.obj = {idUser: "11xx11",estado: 0};
    this.loc2 = [124,124];
    this.geo = {lat:124,lng:124};
  }

  //crear actividad
  postActivity(): void{
    if(this.tituloAdd == ""){this.alert2 = true;}else{this.alert2 = false;}
    if(this.descripcionAdd == ""){this.alert3 = true;}else{this.alert3 = false;}
    if (this.tituloAdd == "" && this.descripcionAdd ==""){
      this.alert1 = true;   
    }else{
      this.alert1 = false;
    }
    if(this.tituloAdd != "" && this.descripcionAdd != ""){
      this.actividad = {
        _id:0,
        __v:0,
        titulo:this.tituloAdd,
        descripcion:this.descripcionAdd,
        estrellas:0,
        propietario: "time4time",
        tags:this.tagsAdd,
        clientes:[],
        ubicacion:"Barcelona",
        location: this.loc2
      };

      this.frontendService.postActividad(this.actividad).subscribe( act => this.goBack(act), err => console.error('Ops: ' + err.message));
    }
    
    //res => { this.jsonActividad = res.json();}
  }

  addTag(): void {
    this.tagsAdd.push(this.variable);
    this.variable = "";
  }
  deleteTag(): void {
    this.tagsAdd.pop();
  }


  goBack(act): void {
    if(!act){
      this.alert1 = true;
    }else{
      this.location.back();
    }
  }
}
