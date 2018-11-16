import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FrontendService} from "../frontend.service";
import {Actividad} from "../actividad";

@Component({
  selector: 'app-info-actividad',
  templateUrl: './info-actividad.component.html',
  styleUrls: ['./info-actividad.component.css']
})
export class InfoActividadComponent implements OnInit {
  actividad: Actividad = new Actividad();
  descripcionAdd: string;
  tagsAdd: string[] = [];
  loc2: number[];
  titulo: string = '';

  comment = {
    user: '',
    comment: '',
    rating: 0
  };
  showAddComments : boolean = false;
  showViewComments : boolean = false;


  constructor( private frontendService: FrontendService,
               private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.actividad.propietario = "time4time";
    this.actividad.titulo = this.titulo;

    this.frontendService.getActividadDePropietario(this.actividad)
      .subscribe(data => {
        this.actividad = data;
        console.log(this.actividad, data);
        let total: number = 0;
        if (this.actividad.comments.length > 0) {
          this.actividad.comments.forEach( comment => {
            total = total + comment.rating;
          });
          this.actividad.rating = total / this.actividad.comments.length;
          this.actividad.rating = this.round(this.actividad.rating, 1);
        } else {
          this.actividad.ubicacion = "Barcelona";
          this.actividad.rating = 0;
        }
      });
    console.log(this.actividad);
  }

  addComment() {
    this.frontendService.addComentarioDeActividad(this.titulo, this.comment)
      .subscribe(data => {
        console.log(data);
        this.actividad = data;
        let total: number = 0;
        this.actividad.comments.forEach( comment => {
          total = total + comment.rating;
        });
        this.actividad.rating = total / this.actividad.comments.length;
        this.actividad.rating = this.round(this.actividad.rating, 1);
      });
  }

  round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}
