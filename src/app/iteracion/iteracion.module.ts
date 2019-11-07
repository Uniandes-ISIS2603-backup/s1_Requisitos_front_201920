import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarIteracionComponent } from './listar-iteracion/listar-iteracion.component';
import { IteracionService } from './iteracion.service';
import { IteracionDetailComponent } from './iteracion-detail/iteracion-detail.component';
import { IteracionCreateComponent } from './iteracion-create/iteracion-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule 
  ],
  declarations: [ListarIteracionComponent, IteracionDetailComponent, IteracionCreateComponent],
  exports: [ListarIteracionComponent, IteracionCreateComponent],
  providers: [IteracionService]

})
export class IteracionModule { }