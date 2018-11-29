import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  imagePath: string = "../../fotosproyectoea/pitufo.png";
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private frontendService: FrontendService,
    private location: Location
  ) { }
  

  ngOnInit() {
    this.usuario = {nombre: "",apellido:"",nick:"time4time",email:"",estrellas:0,tags:[],imagen:"",password:"",actividadesPropietario:[], actividadesCliente:[],contadorEstrellasUsuario:0,horasUsuario:0,_id:0,__v:0}
    this.frontendService.getUsuario(this.usuario.nick).subscribe(user => this.usuario = user);
  }
  eliminarPerfil(usuario: Usuario): void{
    var r = confirm("¿Estás seguro de que quieres borrar la actividad?");
    if (r == true) {
      this.frontendService.deletePerfil(usuario).subscribe(data => this.router.navigate(['/login']));
  } else {
  }
  }

  goBack(): void {
    this.location.back();
  }

}