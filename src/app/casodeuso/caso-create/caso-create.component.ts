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
export class CasoCreateComponent  {
  casoForm: FormGroup;

 constructor
 (
    private requisitoService: CasodeusoService,
    private formBuilder: FormBuilder
  ) 
  {
    this.casoForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      documentacion: ["", [Validators.required]],
      pruebas: ["", [Validators.required]],
      //responsable: ["",[Validators.required]],
      //representanteDelCliente:["",[Validators.required]],
      entidades:["", [Validators.required]],
      servicios:["",[Validators.required]],
      posCondiciones:["",[Validators.required]],
      preCondiciones:["",[Validators.required]],
      caminosExcepcion:["",[Validators.required]]
    });
  }

  createCaso(newCaso: Casodeuso) 
  {
    // Process checkout data here
  console.warn("Your order has been submitted", newCaso);

   this.casoForm.reset();
  }

  
  validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }



}
