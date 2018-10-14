import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FrontendService }  from '../frontend.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor(    
    private route: ActivatedRoute,
    private frontendService: FrontendService,
    private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
