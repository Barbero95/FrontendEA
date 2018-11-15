import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {LocalStorage} from '@ngx-pwa/local-storage';

import { Usuario } from '../usuario';
import { FrontendService }  from '../frontend.service';
import { Actividad } from '../actividad';
import { ObjetoDeNickYEstado } from '../objetoDeNickYEstado';
import { config, from } from 'rxjs';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

    usuario: Usuario;
    lista: Usuario[];

  constructor(
    protected localStorage: LocalStorage,
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location ) { }

  ngOnInit() {
    

   this.frontendService.getUsuarios().subscribe(data =>  this.lista = data);
    
  }
  editarUsuario(): void{}
  eliminarUsuario(usuario: Usuario): void{
    this.frontendService.deleteUsuario(usuario).subscribe(act => this.ngOnInit());
    
  }

}
