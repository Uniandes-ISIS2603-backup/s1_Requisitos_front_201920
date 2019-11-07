import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-caso-create',
  templateUrl: './caso-create.component.html',
  styleUrls: ['./caso-create.component.css']
})
export class CasoCreateComponent implements OnInit {
    clientForm: FormGroup;
    caso:Casodeuso;
  constructor( private servicio: CasodeusoService,
    private formBuilder: FormBuilder,   private toastrService: ToastrService,
    private router: Router) {

        this.clientForm = this.formBuilder.group({
            name: ["", [Validators.required, Validators.minLength(2)]],
            address: ["", Validators.required]
          });
     }

     ngOnInit() {
      this.caso = new Casodeuso();
  }

createCasos():Casodeuso{
    
      
        this.servicio.createCaso(this.caso)
            .subscribe(c => {
                this.caso.id = c.id;
                this.router.navigate(['/casos/' + c.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.caso;
}

}
