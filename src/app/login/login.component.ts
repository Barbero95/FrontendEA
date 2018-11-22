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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private frontendService: FrontendService,
    private location: Location
  ) {}

  ngOnInit() {
 
  }

  //crear actividad
  getLogin(): void{
    var pw2 = new String(this.password);
    this.usuario = {nombre:"",apellido:"",nick:this.username,email:"",estrellas:0,tags:[],imagen:"",password:this.password,actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    this.frontendService.validarUser(this.usuario).subscribe( 
      user => this.usuario= user
      );
      
      var pw1 = new String(this.usuario.password);
      var pw2 = new String(this.password);
      if (JSON.stringify(pw2) === JSON.stringify(pw1)) {
        this.router.navigate(['/menuPrincipal']);
      }
     
  }


  goBack(): void {
    
      this.location.back();
    
  }
}
