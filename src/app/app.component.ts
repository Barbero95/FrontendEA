import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  myFunction1() {
    this.router.navigate(['/menuPrincipal']);
    document.getElementById("menu").style.backgroundColor = "black";
  }
  myFunction2() {
    this.router.navigate(['/catalogo']);
    document.getElementById("cat").style.backgroundColor = "black";
  }
  myFunction3() {
    this.router.navigate(['/crearActividad']);
    document.getElementById("crear").style.backgroundColor = "black";
  }
  myFunction4() {
    this.router.navigate(['/perfil']);
    document.getElementById("perf").style.backgroundColor= "black";
  } 
}
