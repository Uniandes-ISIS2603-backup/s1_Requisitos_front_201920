import { Component, OnInit } from '@angular/core';
import {CasodeusoDetail} from "../casodeuso-detail"
import {CasodeusoService } from '../casodeuso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casodeuso-detail',
  templateUrl: './casodeuso-detail.component.html',
  styleUrls: ['./casodeuso-detail.component.css']
})
export class CasodeusoDetailComponent implements OnInit {
  casoDetail: CasodeusoDetail;
  caso_id:number;
  constructor(private casoService:CasodeusoService, private route: ActivatedRoute) { }

  getDetail(): void {
    this.casoService.getCasosDetail(this.caso_id)
    .subscribe(CDetail => {
        this.casoDetail = CDetail
    });
  }

  ngOnInit() {
    this.caso_id = +this.route.snapshot.paramMap.get('id');
    console.log(this.caso_id);
    this.casoDetail = new CasodeusoDetail();
    this.getDetail();
}

}