import { Component, OnInit } from '@angular/core';
import {Casodeuso} from '../Casodeuso'
import {CasodeusoService } from '../casodeuso.service';
import { CasodeusoDetail } from '../casodeuso-detail';

@Component({
  selector: 'app-casodeuso-list',
  templateUrl: './casodeuso-list.component.html',
  styleUrls: ['./casodeuso-list.component.css']
})
export class CasodeusoListComponent implements OnInit {

  casos: CasodeusoDetail[];

  constructor(private casoService:CasodeusoService ) { }
  getCasos(): void {
    this.casoService.getCasos().subscribe(pCasos => (this.casos = pCasos));
    
  }

  ngOnInit() {
    this.getCasos();
  }
  navigationSubscription;

  ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
    
}
  

} 