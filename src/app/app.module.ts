import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {CasodeusoModule} from './casodeuso/casodeuso.module';
import {DesarrolladorModule} from './desarrollador/desarrollador.module'
import {RequisitoModule} from './requisito/requisito.module';
import {EquipodesarrolloModule} from './equipodesarrollo/equipodesarrollo.module';
import {ReactiveFormsModule} from "@angular/forms";
import {IteracionModule} from './iteracion/iteracion.module';
import {ProyectoModule} from './proyecto/proyecto.module';
import { GoogleChartsModule } from 'angular-google-charts';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { ModificacionModule } from './modificacion/modificacion.module';

import { PaginaDashboardModule } from './pagina-dashboard/pagina-dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CasodeusoModule,
        GoogleChartsModule.forRoot(),
        ReactiveFormsModule,
        PaginaDashboardModule,
        DesarrolladorModule,
        RequisitoModule,
        EquipodesarrolloModule,
        BrowserAnimationsModule,
        IteracionModule,
        ProyectoModule,
        ModificacionModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ModificacionModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
