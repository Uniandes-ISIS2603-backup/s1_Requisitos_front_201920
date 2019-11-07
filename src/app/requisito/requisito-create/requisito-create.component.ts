import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Requisito } from "../requisito";
import { RequisitoService } from "../requisito.service";

@Component({
  selector: 'app-requisito-create',
  templateUrl: './requisito-create.component.html',
  styleUrls: ['./requisito-create.component.css']
})
export class RequisitoCreateComponent 
{
  requisitoForm: FormGroup;

 constructor
 (
    private requisitoService: RequisitoService,
    private formBuilder: FormBuilder
  ) 
  {
    this.requisitoForm = this.formBuilder.group({
      autor: ["", [Validators.required]],
      fuente: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      importancia: ["",[Validators.required]],
      estabilidad:["",[Validators.required]],
      comentariosAdicionales:[""],
      nombre:["",[Validators.required]],
      tipo:["",[Validators.required]]
    });
  }

  createRequisito(newRequisito: Requisito) 
  {
    // Process checkout data here
  console.warn("Your order has been submitted", newRequisito);

   this.requisitoForm.reset();
  }

  
  validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }




}

