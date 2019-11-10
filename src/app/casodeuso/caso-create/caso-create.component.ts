import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';


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
      servicios: ["",[Validators.required]],
      entidades:["",[Validators.required]],
      caminosExcepcion:[""],
      preCondiciones:["",[Validators.required]],
      posCondiciones:["",[Validators.required]],
      caminosAlternos:["",[Validators.required]]
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
