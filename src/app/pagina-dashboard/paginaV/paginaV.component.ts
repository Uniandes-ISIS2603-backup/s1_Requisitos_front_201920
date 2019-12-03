import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../proyecto/proyecto.service';
import { Proyecto } from '../../proyecto/proyecto';


@Component({
  selector: 'app-paginaV-list',
  templateUrl: './paginaV.component.html',
  styleUrls: ['./paginaV.component.css']
})
export class PaginaVComponent implements OnInit {



  constructor(private ps:ProyectoService) {}


  proyectos:Proyecto[];
  getProyectos(): void 
  {
    this.ps.getProyectos().subscribe( proy => this.proyectos = proy);
  }

  ngOnInit() {
  this.getProyectos();
  }

}