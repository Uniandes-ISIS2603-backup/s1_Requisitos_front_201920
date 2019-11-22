import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-caso-create',
  templateUrl: './caso-create.component.html',
  styleUrls: ['./caso-create.component.css']
})
export class CasoCreateComponent implements OnInit {
  casoForm: FormGroup;

  constructor
    (
      private casoService: CasodeusoService,
      private formBuilder: FormBuilder, private toastrService: ToastrService
    ) {

  }
  casos: Casodeuso[];

  caso: Casodeuso

 

  createCaso(caso: Casodeuso) {
    caso= this.arreglarDatos(caso);
    

   

    this.caso = caso;
    console.warn("Your order has been submitted", caso);
    console.log(this.caso.nombre);
    this.casoService.createCaso(caso).subscribe((cas) => {
      this.casos.push(cas);
      this.toastrService.success("el caso fue creado", "caso creation");

    }, err => {
      this.toastrService.error(err, "Error");
    });

    this.casoForm.reset();
    return this.caso;

  }



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
    });
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
