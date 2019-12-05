import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Requisito } from "../requisito";
import { RequisitoService } from "../requisito.service";
import { ToastrService } from 'ngx-toastr';
import { Desarrollador } from "../../desarrollador/desarrollador";

import { Casodeuso } from '../../casodeuso/Casodeuso';
import { CasodeusoService } from '../../casodeuso/casodeuso.service';
import { DesarrolladorService } from "../../desarrollador/desarrollador.service";
import { Modificacion } from "../../modificacion/modificacion";
import { ModificacionService } from "../../modificacion/modificacion.service";

@Component({
  selector: 'app-requisito-create',
  templateUrl: './requisito-create.component.html',
  styleUrls: ['./requisito-create.component.css']
})
export class RequisitoCreateComponent {
  /**
   * Formulario del requisito
   */
  requisitoForm: FormGroup;
  /**
    * El nuevo requisito
    */
  requisito: Requisito;
  /**
  * Lista de desarrolladores
  */
  desarrolladores: Desarrollador[];
  /**
   * Lista de casos
   */
  casos: Casodeuso[];
  
  /**
   * 
   * @param requisitoService 
   * @param formBuilder 
   * @param toastrService 
   * @param cs 
   */
  constructor
    (
      private requisitoService: RequisitoService,
      private formBuilder: FormBuilder,
      private toastrService: ToastrService,
      private cs:CasodeusoService,
      private ds:DesarrolladorService,
      private mods: ModificacionService
    ) {
      }

  createRequisito(newRequisito: Requisito) 
  {
    
    //Variable que guarda el estado del pag
    var that=this;
    //Asigna al requisito el dado por parametro
    this.requisito = newRequisito;
    //Variable que guarda el id del caso a guardar
    var idCaso;
      //Variable que guarda el id del desarrollador a guardar
      var idDesarrollador;
    //?
    that=this; 
    //Mira todos los casos y escoge el que se escogio en el formulario
    this.casos.forEach(function (value) 
    {
      if (value.nombre===that.requisitoForm.value.idCasoDeUso)
      {
        idCaso=value.id;
      

      }

    }); 
    this.desarrolladores.forEach(function (value) 
    {
      if (value.nombre===that.requisitoForm.value.idDesarrollador)
      {
        idDesarrollador=value.id;
       
      }

    }); 

    // Process checkout data here
    console.warn("Your order has been submitted", newRequisito);
    //Crea el requisito (normal)
    this.requisitoService.createRequisito(newRequisito)
      .subscribe((requisito) => 
      {
        var a: Modificacion=new Modificacion;
        a.descripcion = "Se creo un nuevo Requisito con nombre"+ requisito.nombre;
        a.fechaModificacion = new Date();
     
        this.mods.createModificacion(a).subscribe((cas) => {
          this.toastrService.success("Modificacion registrada")
        }, err => {
          this.toastrService.error("no se registro la modificacion")
        });
        this.requisito = requisito;
        this.toastrService.success("El requisito fue creado", "Crear requisito");
      }, err => 
      {
        this.toastrService.error(err, "Error");
      });

     //bloque para crear la relacion con caso de uso
      var that=this;
      //Define un limite de tiempo
      setTimeout(function () 
      {
         that.requisitoService.createRelacionCasoDeUso(that.requisito.id,idCaso).subscribe(
           (cas) => {
                     that.toastrService.success("el caso de uso fue asignado", "Relacion creada");
                }, err => {that.toastrService.error(err, "Error asignando el caso de uso")});
              }
          , 500);
       //bloque para crear la relacion con desarrollador
     
       //Define un limite de tiempo
       setTimeout(function () 
       {
          that.requisitoService.createRelacionDesarrollador(that.requisito.id,idDesarrollador).subscribe(
            (cas) => {
                      that.toastrService.success("el desarrollador fue asignado", "Relacion creada");
                 }, err => {that.toastrService.error(err, "Error asignando el desarrollador")});
               }
           , 500);

    this.requisitoForm.reset();

    return this.requisito;
  }


  /**
    * This function will initialize the component
    */
  ngOnInit() {
    this.requisitoForm = this.formBuilder.group({
      autor: ["", [Validators.required]],
      fuente: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      importancia: ["", [Validators.required]],
      estabilidad: ["", [Validators.required]],
      comentariosAdicionales: [""],
      nombre: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      idCasoDeUso: ["", [Validators.required]],
      idDesarrollador:["", [Validators.required]]
    });
    this.requisito = new Requisito();
    this.cs.getCasos().subscribe(c => (this.casos = c));
    this.ds.getDesarrolladores().subscribe(d=>(this.desarrolladores=d))
  }

}

