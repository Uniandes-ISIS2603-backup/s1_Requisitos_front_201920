import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoListComponent} from './proyecto-list/proyecto-list.component';
import { ProyectoService } from './proyecto.service';
import { AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
    ],
  declarations: [ProyectoListComponent],
  exports:[ProyectoListComponent],
  providers: [ProyectoService, ProyectoService]
})
export class ProyectoModule { }