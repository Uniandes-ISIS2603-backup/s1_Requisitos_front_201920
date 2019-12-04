import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Desarrollador } from '../../desarrollador/desarrollador';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';
import { DesarrolladorDetail } from '../../desarrollador/desarrollador-detail';
@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {
    
    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder, 
    private ds: DesarrolladorService
) { }

user: User;
roles: String[];
desarrolladorForm: FormGroup;
detail: DesarrolladorDetail;
desarrolladores:Desarrollador[];
  
    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        var that=this;
        this.authService.login(that.desarrolladorForm.value.tipo);
        this.toastrService.success('Successfully signed up')
    }
      
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.desarrolladorForm = this.formBuilder.group({
            nombre: ["", [Validators.required]],
            correo: ["", [Validators.required]],
            edad: ["", [Validators.required]],
            cedula:["", [Validators.required]],
            tipo:["", [Validators.required]], 
          });
    
         this.user = new User();
        this.roles = ['REPRESENTANTEDELCLIENTE', 'RESPONSABLE', 'COMUN'];
        this.ds.getDesarrolladores().subscribe(c => (this.desarrolladores = c))
       }
       createDesarrollador(des: Desarrollador) 
{
        var id;
        var that = this;
        this.desarrolladores.forEach(function (value) {
            if (value.nombre === that.desarrolladorForm.value.nombre) {
                id = value.id;
            }
        });
       
        this.ds.createDesarrollador(des).subscribe((cas) => {
            this.desarrolladores.push(cas);
            this.toastrService.success("El desarrollador fue creado", "Desarrollador creado");
        
          }); 
        this.ds.getDesarrolladorDetail(id)
            .subscribe(DDetail => {
                this.detail=DDetail;
               localStorage.setItem('id', String(this.detail.id));
                
                this.toastrService.success("El desarrollador fue creado "+ DDetail.nombre + " Rol: "+DDetail.tipo , "si existe el usuario");
            
                this.signUp();
            }, err => {
              this.toastrService.error(err, "Error");
            });
           
            
       
          
          
           
          }
}


 




    

    
           






  

 
 
