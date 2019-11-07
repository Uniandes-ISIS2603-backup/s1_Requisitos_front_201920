import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesarrolladorListComponent } from './desarrollador-list/desarrollador-list.component';
import { DesarrolladorDetailComponent } from './desarrollador-detail/desarrollador-detail.component';
import { DesarrolladorService } from './desarrollador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DesarrolladorListComponent,DesarrolladorDetailComponent],
  exports: [DesarrolladorListComponent],
  providers: [DesarrolladorService]
})
export class DesarrolladorModule { }