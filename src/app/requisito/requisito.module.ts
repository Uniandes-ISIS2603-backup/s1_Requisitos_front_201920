import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequisitosListComponent} from './requisito-list/requisito-list.component';
import { RequisitoService } from './requisito.service';

@NgModule({
  imports: [CommonModule],
  declarations: [RequisitosListComponent],
  exports:[RequisitosListComponent],
  providers: [RequisitoService]
})
export class RequisitoModule { }