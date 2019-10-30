import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesarrolladorListComponent } from './desarrollador-list/desarrollador-list.component';
import { DesarrolladorService } from './desarrollador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DesarrolladorListComponent],
  exports: [DesarrolladorListComponent],
  providers: [DesarrolladorService]
})
export class DesarrolladorModule { }