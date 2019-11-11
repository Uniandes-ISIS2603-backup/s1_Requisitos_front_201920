import { Component, OnInit } from '@angular/core';

import { Modificacion } from '../modificacion';
import { ModificacionService } from '../modificacion.service';
@Component({
  selector: 'app-modificaciones-list',
  templateUrl: './modificaciones-list.component.html',
  styleUrls: ['./modificaciones-list.component.css']
})
export class ModificacionesListComponent implements OnInit {

mod: Modificacion[];

  constructor(private modService: ModificacionService) { }

  getModificaciones(): void{
    this.modService.getModificaciones().subscribe(mod1 => this.mod = mod1);
  }


  ngOnInit() {
    this.getModificaciones();
  }

}