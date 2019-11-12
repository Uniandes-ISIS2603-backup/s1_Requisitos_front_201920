import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Requisito } from "../requisito";
import { RequisitoService } from "../requisito.service";
import { ToastrService } from 'ngx-toastr';

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


  constructor
    (
      private requisitoService: RequisitoService,
      private formBuilder: FormBuilder,
      private toastrService: ToastrService
    ) {
    this.requisitoForm = this.formBuilder.group({
      autor: ["", [Validators.required]],
      fuente: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      importancia: ["", [Validators.required]],
      estabilidad: ["", [Validators.required]],
      comentariosAdicionales: [""],
      nombre: ["", [Validators.required]],
      tipo: ["", [Validators.required]]
    });
  }

  createRequisito(newRequisito: Requisito) {
    // Process checkout data here
    console.warn("Your order has been submitted", newRequisito);

    this.requisitoService.createRequisito(newRequisito)
      .subscribe((requisito) => {
        this.requisito = requisito;
      });
    this.toastrService.success("El requisito fue creado", "Crear requisito");
    this.requisitoForm.reset();
  }


  /**
    * This function will initialize the component
    */
  ngOnInit() {
    this.requisito = new Requisito();
  }

}

