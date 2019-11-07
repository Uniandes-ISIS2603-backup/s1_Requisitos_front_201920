import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarIteracionComponent } from './listar-iteracion/listar-iteracion.component';
import { IteracionService } from './iteracion.service';
import { IteracionDetailComponent } from './iteracion-detail/iteracion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarIteracionComponent, IteracionDetailComponent],
  exports: [ListarIteracionComponent],
  providers: [IteracionService]

})
export class IteracionModule { }