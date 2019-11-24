import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoService } from '../proyecto/proyecto.service';
import { PaginaDComponent } from './paginaD/paginaD.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';




@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [PaginaDComponent],
  exports: [PaginaDComponent],
  providers: [ProyectoService]
})
export class PaginaDashboardModule { }