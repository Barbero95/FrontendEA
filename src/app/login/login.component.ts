import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Usuario } from '../usuario';
import { FrontendService }  from '../frontend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  username:string;
  password:string;

  constructor(
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
 
  }

  //crear actividad
  getLogin(): void{
    this.usuario = {nombre:"",apellido:"",nick:"",email:"",estrellas:0,tags:[],imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    this.frontendService.getLogin(this.username , this.password).subscribe(user => this.usuario = user);
  }

  

  goBack(): void {
    
      this.location.back();
    
  }
}
