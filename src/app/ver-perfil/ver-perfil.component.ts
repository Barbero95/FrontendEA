import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  usuario: Usuario;
  
  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) { }
  

  ngOnInit() {
    this.usuario = {nombre: "",apellido:"",nick:"time4time",email:"",estrellas:0,tags:[],imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    this.frontendService.getUsuario(this.usuario.nick).subscribe(user => this.usuario = user);
  }

  goBack(): void {
    this.location.back();
  }

}
