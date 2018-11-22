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

  myFunction(number) {
    
    if(number==1){
      document.getElementById("cat").style.backgroundColor="";
      document.getElementById("cat").style.backgroundColor = "#ddd";
      document.getElementById("crear").style.backgroundColor = "#ddd";
      document.getElementById("perf").style.backgroundColor = "#ddd";
    }else if (number==2){
      document.getElementById("cat").style.backgroundColor = "rgba(107, 98, 98, 0.603)";
      document.getElementById("crear").style.backgroundColor = "#ddd";
      document.getElementById("perf").style.backgroundColor = "#ddd";
    }else if (number==3){
      document.getElementById("cat").style.backgroundColor = "#ddd";
      document.getElementById("crear").style.backgroundColor = "rgba(107, 98, 98, 0.603)";
      document.getElementById("perf").style.backgroundColor = "#ddd";
    }else if (number==4){
      document.getElementById("cat").style.backgroundColor = "#ddd";
      document.getElementById("crear").style.backgroundColor = "#ddd";
      document.getElementById("perf").style.backgroundColor = "rgba(107, 98, 98, 0.603)";
    }
    //this.router.navigate(['/menuPrincipal']);
  }
}
