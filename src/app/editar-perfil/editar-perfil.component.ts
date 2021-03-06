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
  tagsEdit: string[] = [];
  variable: string;
  nick: string = "time4time";


  constructor(    
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location) { }

  ngOnInit() {
    this.usuario = {nombre:"",apellido:"",nick:this.nick,email:"",estrellas:0,tags: this.tagsEdit,imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0,contadorEstrellasUsuario:0,horasUsuario:0}
    this.frontendService.getUsuario(this.usuario.nick).subscribe(user => this.usuario = user);
  }

  goSave(): void{
    this.frontendService.updateUsuario(this.usuario).subscribe(() => this.goBack());
    //this.location.back;
  }

  addTag(): void {
    this.usuario.tags.push(this.variable);
    this.variable = "";
  }
  deleteTag(): void {
    this.usuario.tags.pop();
  }

  goBack(): void {
    this.location.back();
  }
}
