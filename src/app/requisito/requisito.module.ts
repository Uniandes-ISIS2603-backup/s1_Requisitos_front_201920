import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequisitoListComponent} from './requisito-list/requisito-list.component';
import { RequisitoService } from './requisito.service';
import { RequisitoDetailComponent } from './requisito-detail/requisito-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule],
  declarations: [RequisitoListComponent, RequisitoDetailComponent],
  exports:[RequisitoListComponent],
  providers: [RequisitoService]
})
export class RequisitoModule { }