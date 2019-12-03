import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoListComponent} from './proyecto-list/proyecto-list.component';
import { ProyectoService } from './proyecto.service';
import { ProyectoDetailComponent } from './proyecto-detail/proyecto-detail.component';
import { ProyectoCreateComponent } from './proyecto-create/proyecto-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule 
    
    ],
  declarations: [ProyectoListComponent, ProyectoDetailComponent, ProyectoCreateComponent],
  exports:[ProyectoListComponent, ProyectoCreateComponent],
  providers: [ProyectoService, ProyectoService]
})
export class ProyectoModule { }