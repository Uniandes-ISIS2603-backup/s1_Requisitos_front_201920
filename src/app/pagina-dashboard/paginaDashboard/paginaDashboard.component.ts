import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProyectoService } from '../../proyecto/proyecto.service';
import { Proyecto } from '../../proyecto/proyecto';




@Component({
    selector: 'app-paginaDashboard-list',
    templateUrl: './paginaDashboard.component.html',
    styleUrls: ['./paginaDashboard.component.css']
})
export class PaginaDashboardComponent implements OnInit {
   

    constructor(private ps: ProyectoService) { }


    proyectos: Proyecto[];
    getProyectos(): void {
        this.ps.getProyectos().subscribe(proy => this.proyectos = proy);
    }

    ngOnInit() {
        

    }



 
}