import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';


@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit 
{
  
  proyectos: Proyecto[];


  getProyectos(): void 
  {
    this.proyectoService.getProyectos().subscribe( proy => this.proyectos = proy);
  }

  constructor(private proyectoService: ProyectoService){};
  
  ngOnInit() 
  {
    this.getProyectos();
  }
}