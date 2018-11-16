import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {LocalStorage} from '@ngx-pwa/local-storage';

import { FrontendService }  from '../frontend.service';
import { Denuncia } from '../denuncia';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';
import { config, from } from 'rxjs';

@Component({
  selector: 'app-ver-denuncias',
  templateUrl: './ver-denuncias.component.html',
  styleUrls: ['./ver-denuncias.component.css']
})
export class VerDenunciasComponent implements OnInit {

  denuncia: Denuncia;
  lista: Denuncia[];
  linkNickEstado: ObjetoDeNickYEstado;  
  constructor(
    protected localStorage: LocalStorage,
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location ) { }

  ngOnInit() {
    this.denuncia = {resumen:null, explicacion:null, denunciante: "time4time", denunciado:null,idActividadDenunciada:null,_id:0,__v:0}
    //this.frontendService.getActividadesPropietario(this.actividad).subscribe(listaAct => this.lista = listaAct);
    this.frontendService.getDenuncias(this.denuncia).subscribe(data =>  this.lista = data);
  }

  eliminarDenuncia(denuncia: Denuncia):void{
    this.frontendService.deleteDenuncia(this.denuncia).subscribe(act => this.ngOnInit(), err => console.error('Ops: ' +  err.message));
    
  }
  
  deshabilitarActividad(denuncia: Denuncia):void{
    this.frontendService.deshabilitarActividad(denuncia).subscribe(() => this.goBack());
    
  }
  habilitarActividad(denuncia: Denuncia):void{
    this.frontendService.habilitarActividad(denuncia).subscribe(() => this.goBack());
    
  }
  goBack(): void {
    this.location.back();
  }
}
