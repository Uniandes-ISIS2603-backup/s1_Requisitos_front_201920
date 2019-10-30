import { Component, OnInit } from '@angular/core';
import {Requisito} from '../requisito';
import { RequisitoService } from '../requisito.service';


@Component({
  selector: 'app-requisito-list',
  templateUrl: './requisito-list.component.html',
  styleUrls: ['./requisito-list.component.css']
})
export class RequisitosListComponent implements OnInit 
{
  /**
     * The list of Requisitos which belong to the BookStore
     */
  requisitos: Requisito[];

/**
   * Asks the service to update the list of Requisitos
   */
  getRequisitos(): void 
  {
    this.requisitoService.getRequisitos().subscribe( pRequisitos => this.requisitos = pRequisitos);
  }

  /**
   * Constructor for the component
   * @param requisitoService The author's services provider
   */
  constructor(private requisitoService: RequisitoService){};
  
  ngOnInit() 
  {
    this.getRequisitos();
  }
}