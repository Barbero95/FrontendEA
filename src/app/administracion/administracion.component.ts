import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';
import { Usuario } from '../usuario';
import { SistemaComponent } from '../sistema/sistema.component';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {


  constructor(    
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location) { }

  usuario: Usuario;


  ngOnInit() {
  }
 //crear actividad
 validar(): void{
    this.usuario = {_id:0, __v:0, nombre: "Arnau", apellido: "Soguero", nick: "time4time", email:"prueba@ea.com", password: "123", tags: [],estrellas:0, imagen: "", 
    rol: "admin", actividadesCliente: [], actividadesPropietario: []};
    
    if(this.usuario.rol  === "admin"){
    this.frontendService.validarAdmin(this.usuario).subscribe();
    }
 //res => { this.jsonActividad = res.json();}
  }




goBack(): void {
  this.location.back();
}
}
