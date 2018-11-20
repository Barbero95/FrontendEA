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
    this.findMe();
  }

  goSearch(){
    this.frontendService.getActividadesGPS().subscribe(data =>  this.listaActividades = data);
    //this.locationInit = true;
  }
  goBack(): void {
    this.location.back();
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
  /*
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
  */
}
