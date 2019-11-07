import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import {EquipoDesarrollo} from '../equipo-desarrollo';
import {EquipoDesarrolloDetail} from '../equipodesarrollo-detail';
import {EquipodesarrolloService} from '../equipodesarrollo.service';

import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-equipodesarrollo-create',
  templateUrl: './equipodesarrollo-create.component.html',
  styleUrls: ['./equipodesarrollo-create.component.css']
})
export class EquipodesarrolloCreateComponent implements OnInit {

  equipodesarrolloForm: FormGroup;

  equiposDesarrollo: EquipoDesarrolloDetail[];

  constructor(
    private equipodesarrolloService: EquipodesarrolloService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.equipodesarrolloForm = this.formBuilder.group({
      equipoDesarrollo: ["", [Validators.required, Validators.minLength(2)]],

    });
  }

  showSuccess() {
    for (let i = 0; i < this.equiposDesarrollo.length; i++){
      console.log(this.equiposDesarrollo[i].id+' '+this.equiposDesarrollo[i].equipoDesarrollo);
    }
    this.toastr.success("Equipo", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  createEquipoDesarrollo(newEquipodesarrollo: EquipoDesarrollo)  {
    console.warn("el equipo fue creado", newEquipodesarrollo);
    this.equipodesarrolloService.createEquipoDesarrollo(newEquipodesarrollo).subscribe(pEquipo => { this.equiposDesarrollo.push(pEquipo);
    this.showSuccess();
    });
    this.equipodesarrolloForm.reset();

  }

  ngOnInit() {

  }
}