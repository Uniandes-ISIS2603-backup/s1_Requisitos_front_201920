import { Component, OnInit } from "@angular/core";
import { Desarrollador } from '../desarrollador';
import { DesarrolladorService } from '../desarrollador.service';

@Component({
  selector: "app-desarrollador-list",
  templateUrl: "./desarrollador-list.component.html",
  styleUrls: ["./desarrollador-list.component.css"]
})
export class DesarrolladorListComponent implements OnInit {

  desarrolladores: Desarrollador[];
    constructor(private ds:DesarrolladorService ) {}
    getDesarrolladores():void{
      this.ds.getDesarrolladores().subscribe(pDesa => (this.desarrolladores = pDesa));
    }
  ngOnInit() {
    this.getDesarrolladores();
  }
}