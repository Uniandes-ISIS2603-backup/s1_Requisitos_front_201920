import { Component, OnInit } from '@angular/core';
import {EquipoDesarrolloDetail} from "../equipodesarrollo-detail"
import {EquipodesarrolloService } from '../equipodesarrollo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipodesarrollo-detail',
  templateUrl: './equipodesarrollo-detail.component.html',
  styleUrls: ['./equipodesarrollo-detail.component.css']
})
export class EquipoDesarrolloDetailComponent implements OnInit {
  equipoDetail: EquipoDesarrolloDetail;
  equipo_id:number;
  constructor(private equipoService:EquipodesarrolloService, private route: ActivatedRoute) { }

  getDetail(): void {
    this.equipoService.getEquiposDetail(this.equipo_id)
    .subscribe(EDetail => {
        this.equipoDetail = EDetail
    });
  }

  ngOnInit() {
    this.equipo_id = +this.route.snapshot.paramMap.get('id');
    console.log(this.equipo_id);
    this.equipoDetail = new EquipoDesarrolloDetail();
    this.getDetail();
}

}