import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipodesarrolloListComponent } from './equipodesarrollo-list/equipodesarrollo-list.component';
import {EquipoDesarrolloDetailComponent} from './equipodesarrollo-detail/equipodesarrollo-detail.component';
import { EquipodesarrolloService } from './equipodesarrollo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipodesarrolloListComponent, EquipoDesarrolloDetailComponent],
  exports: [EquipodesarrolloListComponent],
  providers: [EquipodesarrolloService]
})
export class EquipodesarrolloModule { }