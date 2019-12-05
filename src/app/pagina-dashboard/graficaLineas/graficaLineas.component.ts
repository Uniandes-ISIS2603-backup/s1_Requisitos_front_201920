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
    templateUrl: './graficaLineas.component.html',
    styleUrls: ['./graficaLineas.component.css']
})
export class GraficaLineaComponent implements OnInit {
 
  constructor(){}
  title = 'Area Chart';
   type='AreaChart';
   data = [
      ["2013", 1000, 400],
      ["2014", 1170, 460],
      ["2015", 660, 1120],
      ["2016", 1030, 540]
   ];
   columnNames = ['Year', 'Sales',"Expenses"];
   options = { };
   width = 550;
   height = 400;
  ngOnInit(){}
  
}