import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modificaciones-list',
  templateUrl: './modificaciones-list.component.html',
  styleUrls: ['./modificaciones-list.component.css']
})
export class PaginaVComponent implements OnInit {



  constructor(private proService:ProyectoService) {}

  getProyectos(): void{
    this.proService.getProyectos().subscribe(mod1 => this.poyectos = mod1);
  }


  ngOnInit() {
    this.getProyectos();
  }

}