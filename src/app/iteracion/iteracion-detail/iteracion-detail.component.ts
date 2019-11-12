import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Iteracion} from '../iteracion';
import { IteracionService } from '../iteracion.service';
import { IteracionDetail } from '../iteracion-detail';

@Component({
  selector: 'app-iteracion-detail',
  templateUrl: './iteracion-detail.component.html',
  styleUrls: ['./iteracion-detail.component.css']
})
export class IteracionDetailComponent implements OnInit {
  iteracionDetail: IteracionDetail;

  constructor(private iteracionService: IteracionService,
    private route: ActivatedRoute) { }
  



  /**
  * The editorial's id retrieved from the address
  */
  iteracion_id: number;

  /**
  * The method which retrieves the books of an editorial
  */
  getDetail(): void {
    this.iteracionService.getIteracionDetail(this.iteracion_id)
      .subscribe(iteracionDetail => {
        this.iteracionDetail = iteracionDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  * this.iteracion_id = +this.route.snapshot.paramMap.get('id');
    console.log(this.iteracion_id);
    this.iteracionDetail = new IteracionDetail();
    this.getDetail();
  */
  ngOnInit() {
    
    this.iteracion_id = +this.route.snapshot.paramMap.get('id');
    if (this.iteracion_id) {
      this.iteracionDetail = new IteracionDetail();
      this.getDetail();
 
  }

 

}
}