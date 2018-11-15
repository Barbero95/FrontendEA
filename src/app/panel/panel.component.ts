import { Component, OnInit } from '@angular/core';
import { Estadistica } from '../estadistica';
import { ChartsModule } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { Actividad } from '../actividad';

import { FrontendService }  from '../frontend.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  estadistica: Estadistica;
  actividad: Actividad;
  lista: Actividad[];


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
  //barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  /*
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  
  public barChartData:any[] = [
    {data: this.estadistica.info, label: this.estadistica.label}
  ];
  */
  barChartData:any[] = [
    {data: [1,1,1,1,1,1,1,1,1,1], label: 'Actividad'}
  ];
  constructor(private frontendService: FrontendService) { }

  ngOnInit() {
    this.actividad = {titulo:null, descripcion:null, estrellas:0, propietario: "time4time", tags:null,clientes:[],_id:0,__v:0, ubicacion: null, location:null}
    this.frontendService.getActividadesPropietario(this.actividad).subscribe(data =>  this.lista = data);
    ///-------
    this.estadistica = {info:[],label:"",labels:[]}
    this.frontendService.getEstadistica("111a").subscribe(jsonEsta => this.goActualizar(jsonEsta));
  }
  goActualizar(jsonEsta): void {
    this.estadistica = jsonEsta;
    let data = this.estadistica.info;
    let label = this.estadistica.label;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    clone[0].label = label;
    this.barChartData = clone;
  }
  estadisticaActivity(actividad: Actividad): void{
    this.frontendService.getEstadistica(actividad.titulo).subscribe(jsonEsta => this.goActualizar(jsonEsta));
  }

}
