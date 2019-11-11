import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CasodeusoService } from '../casodeuso.service';
import { Casodeuso } from '../Casodeuso';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';


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
  
  createCaso(caso: Casodeuso) {
    this.caso = caso;
    console.warn("Your order has been submitted", caso);
    
    


   
    console.log(this.caso.nombre);
    this.casoService.createCaso(caso).subscribe((cas) => {
      console.log("hola");
      console.log(cas.id);
      this.casos.push(cas);
      // this.create.emit();
      this.toastrService.success("el caso fue creado", "caso creation");

    }, err => {
      this.toastrService.error(err, "Error");
    });
    this.casoForm.reset();
    return this.caso;

  }












  

  servicios: FormArray;
  entidades: FormArray;
  caminosExcepcion: FormArray;
  preCondiciones: FormArray;
  posCondiciones: FormArray;
  caminosAlternos: FormArray;
  ngOnInit() {
    this.casoForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      documentacion: ["", [Validators.required]],
      pruebas: ["", [Validators.required]],
      servicios: this.formBuilder.array([this.createServicio()]),
      entidades: this.formBuilder.array([this.createEntidades()]),
      caminosExcepcion: this.formBuilder.array([this.createCaminosEx()]),
      preCondiciones: this.formBuilder.array([this.createPreCondiciones()]),
      posCondiciones: this.formBuilder.array([this.createPosCondiciones()]),
      caminosAlternos: this.formBuilder.array([this.createCaminosAL()])
    });
    this.casoService.getCasos().subscribe(c => (this.casos = c));
  }

  createServicio(): FormGroup {
    return this.formBuilder.group({
      el1: '',

    });
  }

  addServicio(): void {
    this.servicios = this.casoForm.get('servicios') as FormArray;
    this.servicios.push(this.createServicio());
  }


  createEntidades(): FormGroup {
    return this.formBuilder.group({
      el1: '',

    });
  }

  addEntidades(): void {
    this.entidades = this.casoForm.get('entidades') as FormArray;
    this.entidades.push(this.createEntidades());
  }

  createCaminosEx(): FormGroup {
    return this.formBuilder.group({
      el1: '',

    });
  }

  addCaminosEx(): void {
    this.caminosExcepcion = this.casoForm.get('caminosExcepcion') as FormArray;
    this.caminosExcepcion.push(this.createCaminosEx());
  }

  createPreCondiciones(): FormGroup {
    return this.formBuilder.group({
      el1: '',

    });
  }

  addPreCondiciones(): void {
    this.preCondiciones = this.casoForm.get('preCondiciones') as FormArray;
    this.preCondiciones.push(this.createPreCondiciones());
  }

  createPosCondiciones(): FormGroup {
    return this.formBuilder.group({
      el1: '',

    });
  }

  addPosCondiciones(): void {
    this.posCondiciones = this.casoForm.get('posCondiciones') as FormArray;
    this.posCondiciones.push(this.createPosCondiciones());
  }


  createCaminosAL(): FormGroup {
    return this.formBuilder.group({
      el1: '',

    });
  }

  addCaminosAL(): void {
    this.caminosAlternos = this.casoForm.get('caminosAlternos') as FormArray;
    this.caminosAlternos.push(this.createCaminosAL());
  }
}
