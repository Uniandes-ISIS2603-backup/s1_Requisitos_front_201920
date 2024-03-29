import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoService } from '../proyecto/proyecto.service';
import { PaginaDComponent } from './paginaD/paginaD.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PaginaVComponent } from './paginaV/paginaV.component';
import { RouterModule } from '@angular/router';
import { PaginaDashboardComponent } from './paginaDashboard/paginaDashboard.component';
import { GraficaLineaComponent } from "./graficaLineas/graficaLineas.component";
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  imports: [
    CommonModule, AppRoutingModule, RouterModule, GoogleChartsModule 
  ],
  declarations: [PaginaDComponent, PaginaVComponent, PaginaDashboardComponent,GraficaLineaComponent],
  exports: [PaginaDComponent, PaginaVComponent, PaginaDashboardComponent],
  providers: [ProyectoService]
})
export class PaginaDashboardModule { }