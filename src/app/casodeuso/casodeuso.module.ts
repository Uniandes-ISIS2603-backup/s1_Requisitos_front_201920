import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CasodeusoListComponent],
  exports:[CasodeusoListComponent],
  providers: [CasodeusoService]
})
export class CasodeusoModule { 

}