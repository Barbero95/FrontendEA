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

  valdist: Number;

  constructor(private route: ActivatedRoute,
              private frontendService: FrontendService) {

    this.actividad = {titulo: null, descripcion: null, estrellas: 0, propietario: 'time4time', tags: null,
      clientes: [], _id: 0, __v: 0, ubicacion: null, location: null};
    this.frontendService.getActividadXdistancia(this.valdist).subscribe(data =>  this.lista = data);


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

  }



}
