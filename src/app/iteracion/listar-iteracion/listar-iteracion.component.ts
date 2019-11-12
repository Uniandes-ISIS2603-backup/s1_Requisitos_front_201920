import { Component, OnInit,  ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Iteracion} from '../iteracion';
import { IteracionService } from '../iteracion.service';
import { IteracionDetail } from '../iteracion-detail';

@Component({
  selector: 'app-listar-iteracion',
  templateUrl: './listar-iteracion.component.html',
})
export class ListarIteracionComponent implements OnInit {

  constructor(private iteracionService: IteracionService, private router: Router) {}

  iteracion_id: number;
  selectedIteracion: IteracionDetail;

    
    /**
     * The list of editorials which belong to the BookStore
     */
    iteraciones: Iteracion[];

    /**
     * Asks the service to update the list of editorials
     */
    getEditorials(): void {
      this.iteracionService.getIteraciones().subscribe(iteraciones => this.iteraciones = iteraciones);
    }
    onSelected(iteracion_id: number): void {
    this.iteracion_id = iteracion_id;
    this.selectedIteracion = new IteracionDetail();
    this.iteracionService.getIteracionDetail(iteracion_id).subscribe(pIteracion => this.selectedIteracion = pIteracion);
  }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getEditorials();
    }


}