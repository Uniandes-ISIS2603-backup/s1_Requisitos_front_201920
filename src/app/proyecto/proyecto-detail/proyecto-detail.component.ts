import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { ProyectoDetail } from '../proyecto-detail';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.css']
})
export class ProyectoDetailComponent implements OnInit {
@Input() proyectoDetail: ProyectoDetail;

  constructor(private proyectoService: ProyectoService,
    private route: ActivatedRoute) { }
    



  /**
  * The editorial's id retrieved from the address
  */
  proyecto_id: number;

  /**
  * The method which retrieves the books of an editorial
  */
  getProyectoDetail(): void {
    this.proyectoService.getProyectoDetail(this.proyecto_id)
      .subscribe(proyectoDetail => {
        this.proyectoDetail = proyectoDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
  ngOnInit() {
    this.proyecto_id = +this.route.snapshot.paramMap.get('id');
    if (this.proyecto_id) {
      this.proyectoDetail = new ProyectoDetail();
      this.getProyectoDetail();
    }

  }

 

}