import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';
import { Desarrollador } from '../../desarrollador/desarrollador';
//import { DesarrolladorService } from 'src/app/desarrollador/desarrollador.service';

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
      private formBuilder: FormBuilder, private toastrService: ToastrService,
     private ds:DesarrolladorService
    ) {

  }
  casos: Casodeuso[];

  caso: Casodeuso
 
 
desarrolladores:Desarrollador[];


  createCaso(caso: Casodeuso) {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.casoForm.value, null, 4));
    caso= this.arreglarDatos(caso);
    this.caso = caso;
    var idResp;
    var idRepre;
    that=this;
    this.desarrolladores.forEach(function (value) {
      if (value.nombre===that.casoForm.value.idResponsable){
        idResp=value.id;
      
      }
       if (value.nombre===that.casoForm.value.idRepresentante){
        idRepre=value.id;
    
      }
    }); 


    console.warn("Your order has been submitted", caso);
    console.log(this.caso.nombre);
    this.caso.id=this.casos.length;
    var idcaso;
      this.casoService.createCaso(caso).subscribe((cas) => {
        this.casos.push(cas);
        idcaso=cas.id
        
        this.toastrService.success("el caso fue creado", "caso creation");
        
      }, err => {
        this.toastrService.error(err, "Error");
      });
  
  
      var that=this;
  setTimeout(function () {

    
    that.casoService.createRelacionResponsable(idcaso,idResp).subscribe((cas) => {
      
      that.toastrService.success("el responsable fue asignado", "Relacion creada");

    }, err => {
      that.toastrService.error(err, "Error asignando el responsable");
      
    });
    
  }, 500);

  setTimeout(function(){

    that.casoService.createRelacionRepresentante(idcaso,idRepre).subscribe((cas) => {
      
      that.toastrService.success("el representante fue asignado", "relacion creada");

    }, err => {
      that.toastrService.error(err, "Error asignando el representante");

    });


  },500);

    


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
      idResponsable: ["", [Validators.required]],
      idRepresentante: ["", [Validators.required]]
    });
    
    this.casoService.getCasos().subscribe(c => (this.casos = c));
    this.ds.getDesarrolladores().subscribe(c => (this.desarrolladores = c))
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
