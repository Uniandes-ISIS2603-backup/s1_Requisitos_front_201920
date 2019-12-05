import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProyectoService } from '../../proyecto/proyecto.service';
import { Proyecto } from '../../proyecto/proyecto';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';
import { Desarrollador } from '../../desarrollador/desarrollador';
import { Casodeuso } from '../../casodeuso/Casodeuso';
import { CasodeusoService } from '../../casodeuso/casodeuso.service';




@Component({
    selector: 'app-paginaDashboard-list',
    templateUrl: './paginaDashboard.component.html',
    styleUrls: ['./paginaDashboard.component.css']
})
export class PaginaDashboardComponent implements OnInit {
   
   
    constructor(private ps: ProyectoService) { }


   

    ngOnInit() {
   
    }
 
    title = 'Datos de el sistema';
    type = 'PieChart';
    data = [
     //  ['Proyectos', this.proyectos.length],
       //['Desarrolladores', this.desarrolladores.length],
       //['Casos de uso', this.casos.length],
       ['Safari', 8.5],
       ['Opera', 6.2],
       ['Others', 0.7] 
    ];
    columnNames = ['Browser', 'Percentage'];
    options = {    
    };
    width = 550;
    height = 400;

  
}