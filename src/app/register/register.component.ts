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


  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private frontendService: FrontendService,
    private location: Location) { }

  ngOnInit() {
    this.usuario = {nombre:"",apellido:"",nick:"",email:"",estrellas:0,tags: this.tagsEdit,imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],_id:0,__v:0}
    
  }

  goSave(): void{
    
    this.frontendService.postUsuario(this.usuario).subscribe(data=> this.router.navigate(['/menuPrincipal']));
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
