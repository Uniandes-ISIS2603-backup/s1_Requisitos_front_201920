import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoService } from '../proyecto/proyecto.service';
import { PaginaDComponent } from './paginaD/paginaD.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PaginaVComponent } from './paginaV/paginaV.component';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule, AppRoutingModule, RouterModule
  ],
  declarations: [PaginaDComponent, PaginaVComponent],
  exports: [PaginaDComponent, PaginaVComponent],
  providers: [ProyectoService]
})
export class PaginaDashboardModule { }