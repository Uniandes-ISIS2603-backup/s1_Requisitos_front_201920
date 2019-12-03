import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Desarrollador } from '../../desarrollador/desarrollador';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';
import { DesarrolladorDetail } from '../../desarrollador/desarrollador-detail';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private formBuilder: FormBuilder, private ds: DesarrolladorService
    ) { }

    user: User;

    roles: String[];
    logInForm: FormGroup;

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.detail.tipo);
        this.toastrService.success('Logged in')
    }
    desarrolladores:Desarrollador[];

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.logInForm = this.formBuilder.group({
            nombre: ["", [Validators.required]],
    
        });



        //  this.roles = ['Administrator', 'Client'];
        this.roles = ['REPRESENTANTEDELCLIENTE', 'DESARROLLADOR', 'COMUN'];
        this.ds.getDesarrolladores().subscribe(c => (this.desarrolladores = c))
    }


    logInUsuario(des: Desarrollador) {
        
        var id;
        var that = this;
        this.desarrolladores.forEach(function (value) {
            if (value.nombre === that.logInForm.value.nombre) {
                id = value.id;
            }
        });
       
        
        this.ds.getDesarrolladorDetail(id)
            .subscribe(DDetail => {
                this.detail=DDetail;
               localStorage.setItem('id', String(this.detail.id));
                
                this.toastrService.success("Bienvenido "+ DDetail.nombre + " Rol: "+DDetail.tipo , "si existe el usuario");
            
                this.login();
            }, err => {
              this.toastrService.error(err, "El usuario no existe");
            });
        
    }
    detail: DesarrolladorDetail;

    
           
}
