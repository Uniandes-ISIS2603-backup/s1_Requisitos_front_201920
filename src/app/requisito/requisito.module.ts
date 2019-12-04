import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequisitoListComponent} from './requisito-list/requisito-list.component';
import { RequisitoService } from './requisito.service';
import { CasodeusoService } from '../casodeuso/casodeuso.service';
import { RequisitoDetailComponent } from './requisito-detail/requisito-detail.component';
import { RequisitoCreateComponent } from './requisito-create/requisito-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DesarrolladorModule} from '../desarrollador/desarrollador.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DesarrolladorModule],
  declarations: [RequisitoListComponent, RequisitoDetailComponent,RequisitoCreateComponent],
  exports:[RequisitoListComponent,RequisitoCreateComponent],
  providers: [RequisitoService,CasodeusoService]
})
export class RequisitoModule { }