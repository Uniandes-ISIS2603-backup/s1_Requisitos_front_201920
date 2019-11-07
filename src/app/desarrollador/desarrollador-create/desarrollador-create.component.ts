import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DesarrolladorService } from '../desarrollador.service';
import { Desarrollador } from '../desarrollador';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-desarrollador-create',
  templateUrl: './desarrollador-create.component.html',
  styleUrls: ['./desarrollador-create.component.css']
})
export class DesarrolladorCreateComponent  {
  desarrolladorForm: FormGroup;

 constructor
 (
    private desarrolladorService: DesarrolladorService,
    private formBuilder: FormBuilder
  ) 
  {
    this.desarrolladorForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      edad: ["", [Validators.required]],
      cedula:["", [Validators.required]],
      tipo:["", [Validators.required]], 
    });
  }

  createDesarrollador(newCaso: Desarrollador) 
  {
    // Process checkout data here
  console.warn("Your order has been submitted", newCaso);

   this.desarrolladorForm.reset();
  }

  
  validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }



}
