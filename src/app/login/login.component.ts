import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  contra:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
 
  }

  //comprobar usuario y contraseña
  getLogin(): void{
    this.usuario = {nombre:"",apellido:"",nick:this.username,email:"",estrellas:0,tags:[],imagen:"",password:this.password,actividadesPropietario:[], actividadesCliente:[],contadorEstrellasUsuario:0,horasUsuario:0,_id:0,__v:0}
    this.frontendService.validarUser(this.usuario).subscribe( 
      data => {
        if (data != null){
          this.goMenuPrincipal(data);
        }else{
          //alerta usuari o contrasenya no existe
        }
      }
      );

  }
  goMenuPrincipal(data): void{
      this.usuario = data;
      
      this.router.navigate(['/menuPrincipal']);
  }


  goBack(): void {
    
    this.router.navigate(['/login']);
    
  }
}
