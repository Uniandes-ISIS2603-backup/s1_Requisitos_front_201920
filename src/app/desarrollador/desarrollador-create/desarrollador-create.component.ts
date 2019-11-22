import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DesarrolladorService } from '../desarrollador.service';
import { Desarrollador } from '../desarrollador';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DesarrolladorDetail } from '../desarrollador-detail';
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
    private formBuilder: FormBuilder,  private toastrService: ToastrService
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

  casos: Desarrollador[];
  createDesarrollador(newCaso: Desarrollador) 
  {
  

    // Process checkout data here
  console.warn("Your order has been submitted", newCaso);

  this.desarrolladorService.createDesarrollador(newCaso).subscribe((cas) => {
    this.casos.push(cas);
    this.toastrService.success("el caso fue creado", "caso creation");

  }, err => {
    this.toastrService.error(err, "Error");
  });

   this.desarrolladorForm.reset();
  }

  
  validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }

  ngOnInit() {

    this.desarrolladorService.getDesarrolladores().subscribe(c => (this.casos = c));
  }

}
