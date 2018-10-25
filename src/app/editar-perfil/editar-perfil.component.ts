import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  usuario: Usuario;
  nombreEdit: string;
  apellidoEdit: string;
  emailEdit: string;
  passwordEdit: string;
  tagsEdit: string[];


  constructor(    
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location) { }

  ngOnInit() {
    this.usuario = {nombre: "",apellido:"",nick:"time4time",email:"",estrellas:0,tags:[],imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    this.frontendService.getUsuario(this.usuario.nick).subscribe(user => this.usuario = user);
    this.nombreEdit = this.usuario.nombre;
    this.apellidoEdit = this.usuario.apellido;
    this.emailEdit = this.usuario.email;
    this.passwordEdit = this.usuario.password;
  }

  goSave(): void{
    this.usuario.nick =  "time4time";
    this.usuario.nombre = this.nombreEdit;
    this.usuario.apellido = this.apellidoEdit;
    this.usuario.email = this.emailEdit;
    this.usuario.password = this.passwordEdit;
    this.usuario.tags = this.tagsEdit;
    this.frontendService.updateUsuario(this.usuario).subscribe(() => this.goBack());
    //this.location.back;
  }

  goBack(): void {
    this.location.back();
  }
}
