import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Actividad } from '../actividad';
import { FrontendService }  from '../frontend.service';

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

  constructor(
    private route: ActivatedRoute,
    private heroService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
}
