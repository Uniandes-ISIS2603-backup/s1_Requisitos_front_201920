import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IteracionService } from '../iteracion.service';
import { Iteracion } from '../iteracion';
import { IteracionDetail } from '../iteracion-detail';
import { ToastrService } from 'ngx-toastr';
import { Modificacion } from '../../modificacion/modificacion';
import { ModificacionService } from '../../modificacion/modificacion.service';


@Component({
  selector: 'app-iteracion-create',
  templateUrl: './iteracion-create.component.html',
  styleUrls: ['./iteracion-create.component.css'],
  
})
export class IteracionCreateComponent  {

 iteracionForm: FormGroup;
 iteracion: Iteracion
   /**
   * 
   * @param requisitoService 
   * @param formBuilder 
   * @param toastrService 
   */

 constructor
 (
    private iteracionService: IteracionService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private mods:ModificacionService
  ) {
  }
 
  

  createIteracion(newCaso: Iteracion) 
  {
    
    console.warn("el equipo fue creado", newCaso);
    newCaso.fechaInicio = new Date(newCaso.fechaInicio)
    newCaso.fechaFin = new Date(newCaso.fechaFin)
    this.iteracionService.createIteracion(newCaso)
    .subscribe(pIteracion => {
      
      var a: Modificacion=new Modificacion;
      a.descripcion = "Se creo una iteracion"
      a.fechaModificacion = new Date();
   
      this.mods.createModificacion(a).subscribe((cas) => {
        this.toastrService.success("Modificacion registrada")
      }, err => {
        this.toastrService.error("no se registro la modificacion")
      });
      this.toastrService.success("La iteracion fue creada", "Crear iteracion");
      
    }, err => 
    {
      this.toastrService.error(err, "Error");
    }
    );
    this.iteracionForm.reset();
  }
  ngOnInit() {
    this.iteracionForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      fechaInicio: ["", [Validators.required]],
      fechaFin:["", [Validators.required]], 
     
    });
this.iteracion = new Iteracion();
  }


}