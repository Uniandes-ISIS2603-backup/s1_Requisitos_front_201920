import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';
import { CasodeusoDetailComponent } from './casodeuso-detail/casodeuso-detail.component';
import {AppRoutingModule} from "../app-routing/app-routing.module";



@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [CasodeusoListComponent, CasodeusoDetailComponent],
  exports:[CasodeusoListComponent],
  providers: [CasodeusoService]
})
export class CasodeusoModule { 

}