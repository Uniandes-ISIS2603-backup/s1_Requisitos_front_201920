import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RequisitoService } from '../requisito.service';
import { Requisito } from '../requisito';
import { RequisitoDetail } from '../requisito-detail';

@Component({
  selector: 'app-requisito-detail',
  templateUrl: './requisito-detail.component.html',
  styleUrls: ['./requisito-detail.component.css']
})
export class RequisitoDetailComponent implements OnInit {
  
   /**
    * Requisito que queremos mostrar
    */
    requisitoDetail:RequisitoDetail;
   /**
  * El id del requisito recuperado
  */
  @Input() 
  requisito_id: number;
  /**
   * Atributo que carga todo
   */
  loader: any;
  


  constructor(
    private requisitoService: RequisitoService,
    private route: ActivatedRoute
  ) { }

   getRequisitoDetail():void
   {
     this.requisitoService.getRequisitoDetail(this.requisito_id).subscribe( 
        pRequisitoDetail => ( this.requisitoDetail= pRequisitoDetail )
     );
   }


  onLoad(params) {

    this.requisito_id = parseInt(params['id']);
    console.log(" en detail " + this.requisito_id);
    this.requisitoDetail = new RequisitoDetail();
    this.getRequisitoDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}