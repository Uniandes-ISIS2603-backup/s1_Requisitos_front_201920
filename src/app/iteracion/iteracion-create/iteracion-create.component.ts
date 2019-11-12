import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IteracionService } from '../iteracion.service';
import { Iteracion } from '../iteracion';
import { IteracionDetail } from '../iteracion-detail';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-iteracion-create',
  templateUrl: './iteracion-create.component.html',
  styleUrls: ['./iteracion-create.component.css'],
  
})
export class IteracionCreateComponent  {

 iteracionForm: FormGroup;
 iteracion: IteracionDetail[]

 constructor
 (
    private iteracionService: IteracionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) 
  {
    this.iteracionForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      fechaInicio: ["", [Validators.required]],
      fechaFin:["", [Validators.required]], 
     
    });
  }
  showSuccess() {
    for (let i = 0; i < this.iteracion.length; i++){
      console.log(this.iteracion[i].id+' '+this.iteracion[i].nombre);
    }
    this.toastr.success("Equipo", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  

  createIteracion(newCaso: Iteracion) 
  {
    console.warn("el equipo fue creado", newCaso);
    newCaso.fechaInicio = new Date(newCaso.fechaInicio)
    newCaso.fechaFin = new Date(newCaso.fechaFin)
    this.iteracionService.createIteracion(newCaso).subscribe(pIteracion => { this.iteracion.push(pIteracion);
    this.showSuccess();
    });
    this.iteracionForm.reset();
  }

  
  


}