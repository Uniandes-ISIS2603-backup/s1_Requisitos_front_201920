import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';
import { CasodeusoDetailComponent } from './casodeuso-detail/casodeuso-detail.component';
import {AppRoutingModule} from "../app-routing/app-routing.module";
import { CasoCreateComponent } from './caso-create/caso-create.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule 
  ],
  declarations: [CasodeusoListComponent, CasodeusoDetailComponent, CasoCreateComponent],
  exports:[CasodeusoListComponent, CasoCreateComponent],
  providers: [CasodeusoService]
})
export class CasodeusoModule { 

}