import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-caso-create',
  templateUrl: './caso-create.component.html',
  styleUrls: ['./caso-create.component.css']
})
export class CasoCreateComponent  implements OnInit  {
  casoForm: FormGroup;

 constructor
 (
    private casoService: CasodeusoService,
    private formBuilder: FormBuilder,  private toastrService: ToastrService
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

  caso:Casodeuso
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
   @Output() cancel = new EventEmitter();
   /**
    * The output which tells the parent component
    * that the user created a new author
    */
   @Output() create = new EventEmitter();

   serviciosList:string[];
   entidadesList:string[];
   caminosEList:string[];
   caminosAList:string[];
   preList:string[];
   posList:string[];
  createCaso() 
  {
    console.warn("Your order has been submitted", this.caso);
    this.serviciosList.push( this.casoForm.controls['servicios'].value);
    this.entidadesList.push( this.casoForm.controls['entidades'].value);
    this.caminosEList.push(this.casoForm.controls['caminosExcepcion'].value);
    this.preList.push( this.casoForm.controls['preCondiciones'].value);
    this.posList.push(this.casoForm.controls['posCondiciones'].value);
    this.caminosAList.push(this.casoForm.controls['caminosAlternos'].value);

    console.log(this.casoForm.controls['name'].value);
    this.caso.name= this.casoForm.controls['name'].value;
    this.caso.servicios=this.serviciosList;
    this.caso.pruebas= this.casoForm.controls['pruebas'].value;
    this.caso.documentacion= this.casoForm.controls['documentacion'].value;
    this.caso.entidades= this.entidadesList ;
    this.caso.caminosExcepcion= this.caminosEList;
    this.caso.preCondiciones=this.preList ;
    this.caso.posCondiciones= this.posList;
    this.caso.caminosAlternos= this.caminosAList;
  this.casoService.createCaso(this.caso).subscribe((cas) => {
      this.caso = cas;
     // this.create.emit();
      this.toastrService.success("el caso fue creado", "caso creation");

  }, err => {
    this.toastrService.error(err, "Error");
});
this.casoForm.reset();
return this.caso;
 
   

  }

 

  
 

  ngOnInit() {
    this.caso= new Casodeuso();
  }
}
