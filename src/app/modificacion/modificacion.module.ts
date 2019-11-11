import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificacionesListComponent } from './modificacion-list/modificaciones-list.component';
import { ModificacionService } from './modificacion.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModificacionesListComponent],
  exports: [ModificacionesListComponent],
  providers: [ModificacionService]
})
export class ModificacionModule { }