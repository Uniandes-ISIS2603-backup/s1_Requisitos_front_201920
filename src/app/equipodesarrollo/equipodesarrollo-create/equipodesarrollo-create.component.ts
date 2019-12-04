import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import {EquipoDesarrollo} from '../equipo-desarrollo';
import {EquipoDesarrolloDetail} from '../equipodesarrollo-detail';
import {EquipodesarrolloService} from '../equipodesarrollo.service';


import { ToastrService } from "ngx-toastr";
import { Desarrollador } from '../../desarrollador/desarrollador';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';

@Component({
  selector: 'app-equipodesarrollo-create',
  templateUrl: './equipodesarrollo-create.component.html',
  styleUrls: ['./equipodesarrollo-create.component.css']
})
export class EquipodesarrolloCreateComponent implements OnInit {

  equipodesarrolloForm: FormGroup;

  equipoDesarrollo: EquipoDesarrollo;

  desarrolladores: Desarrollador[];
  equiposDesarrollo:EquipoDesarrollo[];

  constructor(
    private equipodesarrolloService: EquipodesarrolloService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private desarrolloService: DesarrolladorService
  ) {
    this.equipodesarrolloForm = this.formBuilder.group({
      equipoDesarrollo: ["", [Validators.required, Validators.minLength(2)]],
      idD1: ["", [Validators.required]],
      idD2: ["", [Validators.required]],
      idD3: ["", [Validators.required]],
      idD4: ["", [Validators.required]],
      idD5: ["", [Validators.required]]

    });
  }

  showSuccess() {
   
    this.toastr.success("Equipo", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  createEquipoDesarrollo(newEquipodesarrollo: EquipoDesarrollo)  {
    console.warn("el equipo fue creado", newEquipodesarrollo);
    var id1: number;
    var id2: number;
    var id3: number;
    var id4: number;
    var id5: number;

    var idEquipo;

    this.equipoDesarrollo= newEquipodesarrollo;
    var that = this;
    this.desarrolladores.forEach(function (value) {
      
      if(id1==null &&value.nombre===that.equipodesarrolloForm.value.idD1 )
      {
         id1=value.id;
      }
      else if(id2==null && value.nombre === that.equipodesarrolloForm.value.idD2)
        {
          id2=value.id;
        }
        else if(id3==null && value.nombre === that.equipodesarrolloForm.value.idD3)
        {
          id3=value.id;
        }
        else if(id4==null && value.nombre === that.equipodesarrolloForm.value.idD4)
        {
          id4=value.id;
        }
        else if(id5==null && value.nombre === that.equipodesarrolloForm.value.idD5)
        {
          id5=value.id;
        }
    });
    this.equipoDesarrollo.id= this.equiposDesarrollo.length;
    this.equipodesarrolloService.createEquipoDesarrollo(newEquipodesarrollo).subscribe(pEquipo => { this.equiposDesarrollo.push(pEquipo);idEquipo=pEquipo.id;
    this.showSuccess();
    });
  
    setTimeout(function () {
     that.equipodesarrolloService.createRelacionDesarrollador(id1,idEquipo).subscribe((cas) => {
        
        that.toastr.success("el responsable fue asignado", "Relacion creada");
  
      }, err => {
        that.toastr.error(err, "Error asignando los desarrolladores");
        
      });
      
      
    }, 500);
    setTimeout(function () {
      that.equipodesarrolloService.createRelacionDesarrollador(id2,idEquipo).subscribe((cas) => {
         
         that.toastr.success("el responsable fue asignado", "Relacion creada");
   
       }, err => {
         that.toastr.error(err, "Error asignando los desarrolladores");
         
       });
       
       
     }, 500);
     setTimeout(function () {
      that.equipodesarrolloService.createRelacionDesarrollador(id3,idEquipo).subscribe((cas) => {
         
         that.toastr.success("el responsable fue asignado", "Relacion creada");
   
       }, err => {
         that.toastr.error(err, "Error asignando los desarrolladores");
         
       });
       
       
     }, 500);
     setTimeout(function () {
      that.equipodesarrolloService.createRelacionDesarrollador(id4,idEquipo).subscribe((cas) => {
         
         that.toastr.success("el responsable fue asignado", "Relacion creada");
   
       }, err => {
         that.toastr.error(err, "Error asignando los desarrolladores");
         
       });
       
       
     }, 500);
     setTimeout(function () {
      that.equipodesarrolloService.createRelacionDesarrollador(id5,idEquipo).subscribe((cas) => {
         
         that.toastr.success("el responsable fue asignado", "Relacion creada");
   
       }, err => {
         that.toastr.error(err, "Error asignando los desarrolladores");
         
       });
       
       
     }, 500);
    this.equipodesarrolloForm.reset();

  }

  ngOnInit() {
    this.equipodesarrolloService.getEquipodesarrollo().subscribe(c=> (this.equiposDesarrollo= c))
    this.desarrolloService.getDesarrolladores().subscribe(c => (this.desarrolladores = c))

  }
}