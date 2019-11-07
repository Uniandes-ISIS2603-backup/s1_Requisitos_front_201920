import { Component, OnInit } from "@angular/core";
import { DesarrolladorDetail } from '../desarrollador-detail';
import { DesarrolladorService } from '../desarrollador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-desarrollador-detail",
  templateUrl: "./desarrollador-detail.component.html",
  styleUrls: ["./desarrollador-detail.component.css"]
})
export class DesarrolladorDetailComponent implements OnInit {

  desarrolladorDetail: DesarrolladorDetail;
  desarrolladorId:number;
    constructor(private ds:DesarrolladorService,private route: ActivatedRoute ) {}

    getDetail(): void {
      this.ds.getDesarrolladorDetail(this.desarrolladorId)
      .subscribe(DDetail => {
          this.desarrolladorDetail = DDetail
      });
    } 
  ngOnInit() {
    this.desarrolladorId = +this.route.snapshot.paramMap.get('id');
    console.log(this.desarrolladorId);
    this.desarrolladorDetail = new DesarrolladorDetail();
    this.getDetail();
  }
}