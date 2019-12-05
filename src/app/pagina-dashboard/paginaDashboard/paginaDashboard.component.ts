import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProyectoService } from '../../proyecto/proyecto.service';
import { Proyecto } from '../../proyecto/proyecto';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';
import { Desarrollador } from '../../desarrollador/desarrollador';
import { Casodeuso } from '../../casodeuso/Casodeuso';
import { CasodeusoService } from '../../casodeuso/casodeuso.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";

const API_URL = environment.apiURL;

@Component({
    selector: 'app-paginaDashboard-list',
    templateUrl: './paginaDashboard.component.html',
    styleUrls: ['./paginaDashboard.component.css']
})
export class PaginaDashboardComponent implements OnInit {
 
  constructor(){}
  title = 'Partes de la aplicación';
  type = 'PieChart';
  data = [
     ['Proyectos', 45.0],
     ['Equipos de Desarrollo', 26.8],
     ['Casos de Uso', 12.8],
     ['Desarrolladores', 8.5],
     ['Iteraciones', 6.2]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {    
  };
  width = 550;
  height = 400;
  ngOnInit(){}
  
}