import { Component, OnInit } from '@angular/core';
import { Desarrollador } from '../../desarrollador/desarrollador';

import { DesarrolladorService } from '../../desarrollador/desarrollador.service';


@Component({
  selector: 'app-paginaD-list',
  templateUrl: './paginaD.component.html',
  styleUrls: ['./paginaD.component.css']
})
export class PaginaDComponent implements OnInit {



  constructor(private ds:DesarrolladorService) {}


loggeado:Desarrollador;

 

  ngOnInit() {
    var us=localStorage.getItem('id');
    var num=+us;
    this.ds.getDesarrolladorDetail(num)
      .subscribe(DDetail => {
          this.loggeado= DDetail
      });
  }

  salir(){
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    
  }

}