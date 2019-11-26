import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-caso-create',
  templateUrl: './caso-create.component.html',
  styleUrls: ['./caso-create.component.css']
})
export class CasoCreateComponent implements OnInit {
  casoForm: FormGroup;
 // desForm: FormGroup;

  constructor
    (
      private casoService: CasodeusoService,
      private formBuilder: FormBuilder, private toastrService: ToastrService
    ) {

  }
  casos: Casodeuso[];

  caso: Casodeuso
 
 

  createCaso(caso: Casodeuso) {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.casoForm.value, null, 4));
    caso= this.arreglarDatos(caso);
    this.caso = caso;
    var num;
  
    console.warn("Your order has been submitted", caso);
    console.log(this.caso.nombre);
    this.casoService.createCaso(caso).subscribe((cas) => {
      this.casos.push(cas);
      
      this.toastrService.success("el caso fue creado", "caso creation");
      
    }, err => {
      this.toastrService.error(err, "Error");
    });
    

    
    this.casoService.createRelacionResponsable(this.casos[this.casos.length].id,this.casoForm.value.idResponsable).subscribe((cas) => {
      
      this.toastrService.success("el responsable fue asignado", "caso creation");

    }, err => {
      this.toastrService.error(err, "Error asignando el responsable");

    });

    this.casoForm.reset();
    
    return this.caso;

  }
/*
  asignarDes(caso:Casodeuso,idResponsable, idRepresentante){
  
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(idResponsable, null, 4));
    alert(idResponsable);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(caso, null, 4));
    this.casoService.createRelacionResponsable(caso.id,idResponsable).subscribe((cas) => {
      this.toastrService.success("el responsable fue creado", "caso creation");

    }, err => {
      this.toastrService.error(err, "Error");
    });

    this.desForm.reset();

  }
  */

  ngOnInit() {

    this.casoForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      documentacion: ["", [Validators.required]],
      pruebas: ["", [Validators.required]],
      servicios: ["", [Validators.required]],
      entidades: ["", [Validators.required]],
      caminosExcepcion: ["", [Validators.required]],
      preCondiciones: ["", [Validators.required]],
      posCondiciones: ["", [Validators.required]],
      caminosAlternos: ["", [Validators.required]],
      idResponsable: ["", [Validators.required]],
      idRepresentante: ["", [Validators.required]]
    });
    /*
    this.desForm = this.formBuilder.group({
      idResponsable: ["", [Validators.required]],
      idRepresentante: ["", [Validators.required]],
      
    });
    */
    this.casoService.getCasos().subscribe(c => (this.casos = c));
  }




  arreglarDatos(caso:Casodeuso): Casodeuso{
    var a: string[] = caso.servicios;
    var arrayServ= a.toString().split(',');
    caso.servicios=[];
    arrayServ.forEach(st=> caso.servicios.push(st));

    var a: string[] = caso.entidades;
    var arrayServ= a.toString().split(',');
    caso.entidades=[];
    arrayServ.forEach(st=> caso.entidades.push(st));

    var a: string[] = caso.caminosAlternos;
    var arrayServ= a.toString().split(',');
    caso.caminosAlternos=[];
    arrayServ.forEach(st=> caso.caminosAlternos.push(st));

    var a: string[] = caso.caminosExcepcion;
    var arrayServ= a.toString().split(',');
    caso.caminosExcepcion=[];
    arrayServ.forEach(st=> caso.caminosExcepcion.push(st));

    var a: string[] = caso.preCondiciones;
    var arrayServ= a.toString().split(',');
    caso.preCondiciones=[];
    arrayServ.forEach(st=> caso.preCondiciones.push(st));

    var a: string[] = caso.posCondiciones;
    var arrayServ= a.toString().split(',');
    caso.posCondiciones=[];
    arrayServ.forEach(st=> caso.posCondiciones.push(st));
    return caso;
  }

}
