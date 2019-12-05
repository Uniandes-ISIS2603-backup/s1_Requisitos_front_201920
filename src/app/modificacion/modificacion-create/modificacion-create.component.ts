import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { ModificacionService } from '../modificacion.service';
import { Modificacion } from '../modificacion';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';
import { RequisitoService } from '../../requisito/requisito.service';
import { Requisito } from '../../requisito/requisito';
//import { DesarrolladorService } from 'src/app/desarrollador/desarrollador.service';

@Component({
  selector: 'app-modificacion-create',
  templateUrl: './modificacion-create.component.html',
  styleUrls: ['./modificacion-create.component.css']
})
export class ModificacionCreateComponent implements OnInit {
  modificacionForm: FormGroup;


  constructor
    (
      private modificacionService: ModificacionService,
      private formBuilder: FormBuilder, private toastrService: ToastrService,
     private rs:RequisitoService
    ) {

  }
  modificaciones: Modificacion[];

  modificacion: Modificacion
 
 
  requisitos:Requisito[];


  createModificacion(modificacion: Modificacion) {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.casoForm.value, null, 4));
    modificacion= this.arreglarDatos(modificacion);
    this.modificacion = modificacion;
    var idReq;
    that=this;
    this.requisitos.forEach(function (value) {
      if (value.nombre===that.modificacionForm.value.idReq){
        idReq=value.id;
      
      }
    }); 


    console.warn("Your order has been submitted", modificacion);
    console.log(this.modificacion.id);
    this.modificacion.id=this.modificaciones.length;
    var idMod;
      this.modificacionService.createModificacion(modificacion).subscribe((mod) => {
        this.modificaciones.push(mod);
        idMod=mod.id
        
        this.toastrService.success("la modificacion fue creada", "modificacion creation");
        
      }, err => {
        this.toastrService.error(err, "Error");
      });
  
  
      var that=this;
  setTimeout(function () {

    
    that.modificacionService.createRelacionRequisito(idMod,idReq).subscribe((mod) => {
      
      that.toastrService.success("el requisito fue asignado", "Relacion creada");

    }, err => {
      that.toastrService.error(err, "Error asignando el requisito");
      
    });
    
  }, 500);

    this.modificacionForm.reset();
  
    

    return this.modificacion;

  }



 

  ngOnInit() {

    this.modificacionForm = this.formBuilder.group({
      fechaModificacion: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      desarrolladorModificaciones: ["", [Validators.required]],
      casoModificaciones: ["", [Validators.required]],
      modificacionesRequisito: ["", [Validators.required]]
    });
    
    this.modificacionService.getModificaciones().subscribe(c => (this.modificaciones = c));
    this.rs.getRequisitos().subscribe(c => (this.requisitos = c))
  }




  arreglarDatos(modificacion:Modificacion): Modificacion{
    
    return modificacion;
  }

}
