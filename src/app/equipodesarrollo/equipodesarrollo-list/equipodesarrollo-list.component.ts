import { Component, OnInit } from '@angular/core';
import {EquipoDesarrollo} from '../equipo-desarrollo';
import {EquipodesarrolloService} from '../equipodesarrollo.service';
@Component({
  selector: 'app-equipodesarrollo-list',
  templateUrl: './equipodesarrollo-list.component.html',
  styleUrls: ['./equipodesarrollo-list.component.css']
})
export class EquipodesarrolloListComponent implements OnInit {

equiposDesarrollo: EquipoDesarrollo[];

  constructor(private equipodesarrolloService: EquipodesarrolloService) { }

  getEquiposdesarrollo(): void{
    this.equipodesarrolloService.getEquipodesarrollo().subscribe(pEquipoDesarrollo => this.equiposDesarrollo = pEquipoDesarrollo);
  }
  ngOnInit() {
    this.getEquiposdesarrollo();
  }

}