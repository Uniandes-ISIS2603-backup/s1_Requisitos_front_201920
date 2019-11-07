import { Component, OnInit } from "@angular/core";
import { Desarrollador } from '../desarrollador';
import { DesarrolladorService } from '../desarrollador.service';

@Component({
  selector: "app-desarrollador-detail",
  templateUrl: "./desarrollador-detail.component.html",
  styleUrls: ["./desarrollador-detail.component.css"]
})
export class DesarrolladorDetailComponent implements OnInit {

  desarrolladores: Desarrollador[];
    constructor(private ds:DesarrolladorService ) {}

    getDesarrolladores():void{
      this.ds.getDesarrolladores().subscribe(pDesa => (this.desarrolladores = pDesa));
    }
  ngOnInit() {
    this.getDesarrolladores();
  }
}