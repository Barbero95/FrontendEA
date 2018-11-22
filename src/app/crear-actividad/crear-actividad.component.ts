import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  comprobacionDeTitulo: string = "hola mundo";

  //Para alertas
  alert1: boolean = false;
  alert2: boolean = false;
  alert3: boolean = false;
  alert4: boolean = false;

  //GPS
  latitude: number = 41.27530691061249;
  longitude: number = 1.9866693019866941;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
    //para saber donde creas la actividad
    this.findMe();
  }

  //crear actividad
  postActivity(): void{
    this.loc2 = [this.latitude, this.longitude];
    
    if(this.tituloAdd == ""){this.alert2 = true;}else{this.alert2 = false;}
    if(this.descripcionAdd == ""){this.alert3 = true;}else{this.alert3 = false;}
    if (this.tituloAdd == "" && this.descripcionAdd ==""){
      this.alert1 = true;   
    }else{
      this.alert1 = false;
    }
    if(this.tituloAdd != "" && this.descripcionAdd != ""){
      this.actividad = {
        _id:"",
        __v:0,
        titulo:this.tituloAdd,
        descripcion:this.descripcionAdd,
        estrellas:0,
        propietario: "time4time",
        tags:this.tagsAdd,
        clientes:[],
        ubicacion:"Barcelona",
        localizacion: this.loc2
      };
      
      this.frontendService.getActividad(this.actividad.titulo).subscribe(act => this.comprobacionDeTitulo = act.titulo , err => console.error('Ops: ' + err.message))
      console.log(this.comprobacionDeTitulo);
      if(this.comprobacionDeTitulo == this.actividad.titulo){
        this.alert1 = true;
      }else{
        this.frontendService.postActividad(this.actividad).subscribe( act => this.goBack(act), err => console.error('Ops: ' + err.message));
      }
      
    }
    
    //res => { this.jsonActividad = res.json();}
  }

  addTag(): void {
    if(this.variable==""){
      this.alert4 = true; 
    }else{
      this.tagsAdd.push(this.variable);
      this.alert4 = false;
    }
    this.variable = "";
  }
  deleteTag(item): void {
    var pos = this.tagsAdd.indexOf(item);
    this.tagsAdd.splice(pos,1);
    //console.log(pos);
  }


  goBack(act): void {
    //this.location.back();
    this.router.navigate(['/menuPrincipal']);
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  onChooseLocation(event){
    console.log(event);
    this.longitude=event.coords.lng;
    this.latitude=event.coords.lat;
  }
}
