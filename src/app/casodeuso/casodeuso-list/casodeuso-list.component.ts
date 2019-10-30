import { Component, OnInit } from '@angular/core';
import {Casodeuso} from '../Casodeuso'
import {CasodeusoService } from '../casodeuso.service';

@Component({
  selector: 'app-casodeuso-list',
  templateUrl: './casodeuso-list.component.html',
  styleUrls: ['./casodeuso-list.component.css']
})
export class CasodeusoListComponent implements OnInit {
  casos: Casodeuso[];
  constructor(private casoService:CasodeusoService ) { }
  getCasos(): void {
    this.casoService.getCasos().subscribe(pCasos => (this.casos = pCasos));
  }

  ngOnInit() {
    this.getCasos();
  }
  

} 