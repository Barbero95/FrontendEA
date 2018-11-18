import { Component, OnInit } from '@angular/core';

import { FrontendService } from '../frontend.service';
import { Actividad } from '../actividad';
import {ActivatedRoute} from '@angular/router';

import {Valordistancia} from '../valordistancia';

@Component({
  selector: 'app-actividades-xdistancia',
  templateUrl: './actividades-xdistancia.component.html',
  styleUrls: ['./actividades-xdistancia.component.css']
})
export class ActividadesXdistanciaComponent implements OnInit {

  valSelected: Number;
  actividad: Actividad;
  lista: Actividad[];
  distancia: Valordistancia[];

  latitude: Number;
  longitude: Number;

  valdist: Number;

  constructor(private route: ActivatedRoute,
              private frontendService: FrontendService) {



  }

  ngOnInit() {

    this.distancia = [
      {valor: 1},
      {valor: 10},
      {valor: 100}
    ];
    this.valSelected = 10;




  }



  onValSelected(val: any) {

this.valdist = (val);

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(

        function (datos) {

          this.latitude = datos.coords.latitude;
          this.longitude = datos.coords.longitude;

          alert('latitud:' + datos.coords.latitude + ' longitud:' + this.latitude);
        },
        function () {

          alert('Algo falla');

        }
      );

    } else {

      alert('No esta soportado');

    }

    this.actividad = {titulo: null, descripcion: null, estrellas: 0, propietario: 'time4time', tags: null,
      clientes: [], _id: 0, __v: 0, ubicacion: null, location: null};
    this.frontendService.getActividadXdistancia(this.valdist, this.latitude, this.longitude).subscribe(data =>  this.lista = data);



  }



}
