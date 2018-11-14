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
  tagsEdit: string[] = [];
  variable: string;
  nick: string = "time4time";


  constructor(    
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location) { }

  ngOnInit() {
    this.usuario = {nombre: this.nombreEdit,apellido:this.apellidoEdit,nick:this.nick,email:this.emailEdit,estrellas:0,tags: this.tagsEdit,imagen:"",password:this.passwordEdit,actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    this.frontendService.getUsuario(this.usuario.nick).subscribe(user => this.usuario = user);
  }

  goSave(): void{
    this.frontendService.updateUsuario(this.usuario).subscribe(() => this.goBack());
    //this.location.back;
  }

  addTag(): void {
    this.tagsEdit.push(this.variable);
    this.variable = "";
  }

  goBack(): void {
    this.location.back();
  }
}
