import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IteracionService } from '../iteracion.service';
import { Iteracion } from '../iteracion';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iteracion-create',
  templateUrl: './iteracion-create.component.html',
  styleUrls: ['./iteracion-create.component.css']
})
export class IteracionCreateComponent  {

 iteracionForm: FormGroup;

 constructor
 (
    private iteracionService: IteracionService,
    private formBuilder: FormBuilder
  ) 
  {
    this.iteracionForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      fechaInicio: ["", [Validators.required]],
      fechaFin:["", [Validators.required]], 
    });
  }

  createIteracion(newCaso: Iteracion) 
  {
    // Process checkout data here
  console.warn("Your order has been submitted", newCaso);

   this.iteracionForm.reset();
  }

  
  


}