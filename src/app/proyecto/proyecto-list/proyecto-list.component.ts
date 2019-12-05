import { Component, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProyectoService } from '../proyecto.service';
import { ProyectoDetail } from '../proyecto-detail';


@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit 
{
  constructor(private proyectoService: ProyectoService){};
  proyecto_id:number;
  selectedProyecto:ProyectoDetail;
  proyectos: Proyecto[];


  getProyectos(): void 
  {
    this.proyectoService.getProyectos().subscribe( proyectos => this.proyectos = proyectos);
  }
  onSelected(proyecto_id:number): void{
    this.proyecto_id = proyecto_id;
    this.selectedProyecto = new ProyectoDetail();
    this.proyectoService.getProyectoDetail(proyecto_id).subscribe(pProyecto => this.selectedProyecto = pProyecto);
  }
  
  
  ngOnInit() 
  {
    this.getProyectos();
  }
}