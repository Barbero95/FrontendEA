import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Actividad } from '../actividad';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  actividad: Actividad = new Actividad;
  searchTag: string = "Escribre un Tag";
  listaActividades: Actividad[];
  locationInit: boolean;
  prueba: number = 0;
  

  //prueba de mostrar dos puntos
  //lista = [{lati: 51.678418, longi: 7.809007},{lati: 51.678418, longi: 7.108007}];

  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) { }

  ngOnInit() {
    //this.locationInit = false;
  }

  goSearch(){
    this.frontendService.getActividadesGPS().subscribe(data =>  this.listaActividades = data);
    //this.locationInit = true;
  }
  goBack(): void {
    this.location.back();
  }

}
