import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesarrolladorListComponent } from './desarrollador-list/desarrollador-list.component';
import { DesarrolladorDetailComponent } from './desarrollador-detail/desarrollador-detail.component';
import { DesarrolladorService } from './desarrollador.service';
import { AppRoutingModule} from "../app-routing/app-routing.module";
import { DesarrolladorCreateComponent } from './desarrollador-create/desarrollador-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule,ReactiveFormsModule 
  ],
  declarations: [DesarrolladorListComponent,DesarrolladorDetailComponent, DesarrolladorCreateComponent],
  exports: [DesarrolladorListComponent, DesarrolladorCreateComponent],
  providers: [DesarrolladorService]
})
export class DesarrolladorModule { }