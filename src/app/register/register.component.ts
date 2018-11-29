import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario;
  tagsEdit: string[] = [];
  variable: string;
  alerta: boolean = false;
  alertaNombre: boolean = false;
  alertaNick: boolean = false;
  alertaApellido: boolean = false;
  alertaEmail: boolean = false;

  password2: string;

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private frontendService: FrontendService,
    private location: Location) { }

  ngOnInit() {
    this.usuario = {nombre:"",apellido:"",nick:"",email:"",estrellas:0,contadorEstrellasUsuario:0,horasUsuario:0,tags: this.tagsEdit,imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    
  }

  goSave(): void{
    if(this.usuario.nombre === ""){
      this.alertaNombre = true;
    }
    else{
    this.alertaNombre = false;}

    if(this.usuario.email === ""){
      this.alertaEmail= true;
    }
    else{
      this.alertaEmail = false;}

    if(this.usuario.nick === ""){
      this.alertaNick = true;
    }
    else{
      this.alertaNick = false;}

    if(this.usuario.apellido === ""){
      this.alertaApellido = true;
    }
    else{
      this.alertaApellido = false;}
      
    if(this.usuario.password === "" || this.password2 === ""){
      this.alerta = true;
    }
    else{
      this.alerta = false;}

    if ( this.password2 === this.usuario.password  && this.alertaApellido == false && this.alertaEmail
    == false && this.alertaNick == false && this.alertaNombre == false){
      console.log(this.usuario.horasUsuario);
    this.frontendService.postUsuario(this.usuario).subscribe(data=> this.router.navigate(['/login']));
    //this.location.back;
    }
    else{
      this.alerta = true;
    }
  }

  addTag(): void {
    this.usuario.tags.push(this.variable);
    this.variable = "";
  }
  deleteTag(): void {
    this.usuario.tags.pop();
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}
