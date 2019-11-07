import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipodesarrolloListComponent } from './equipodesarrollo-list/equipodesarrollo-list.component';
import {EquipoDesarrolloDetailComponent} from './equipodesarrollo-detail/equipodesarrollo-detail.component';
import { EquipodesarrolloService } from './equipodesarrollo.service';
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {EquipodesarrolloCreateComponent} from "./equipodesarrollo-create/equipodesarrollo-create.component";

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [EquipodesarrolloListComponent, EquipoDesarrolloDetailComponent, EquipodesarrolloCreateComponent],
  exports: [EquipodesarrolloListComponent],
  providers: [EquipodesarrolloService]
})
export class EquipodesarrolloModule { }