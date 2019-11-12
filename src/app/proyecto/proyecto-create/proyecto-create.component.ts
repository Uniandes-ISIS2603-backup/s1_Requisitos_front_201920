import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyecto';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proyecto-create',
  templateUrl: './proyecto-create.component.html',
  styleUrls: ['./proyecto-create.component.css']
})
export class ProyectoCreateComponent  {

 proyectoForm: FormGroup;

 constructor
 (
    private proyectoService: ProyectoService,
    private formBuilder: FormBuilder
  ) 
  {
    this.proyectoForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      fechaInicial: ["", [Validators.required]],
      fechaFinal:["", [Validators.required]], 
    });
  }

  createProyecto(newCaso: Proyecto) 
  {
    // Process checkout data here
  console.warn("Your order has been submitted", newCaso);

   this.proyectoForm.reset();
  }

  
  


}