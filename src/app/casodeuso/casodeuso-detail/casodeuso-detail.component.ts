import { Component, OnInit } from '@angular/core';
import {CasodeusoDetail} from "../casodeuso-detail"
import {CasodeusoService } from '../casodeuso.service';

@Component({
  selector: 'app-casodeuso-detail',
  templateUrl: './casodeuso-detail.component.html',
  styleUrls: ['./casodeuso-detail.component.css']
})
export class CasodeusoDetailComponent implements OnInit {
  casoDetail: CasodeusoDetail;
  caso_id:number =56782;
  constructor(private casoService:CasodeusoService) { }

  getDetail(): void {
    this.casoService.getCasosDetail(this.caso_id).subscribe(pCasos => (this.casoDetail = pCasos));
  }

  ngOnInit() {
    this.getDetail();
  }

}