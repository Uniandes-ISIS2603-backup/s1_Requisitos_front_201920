import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {RequisitoListComponent} from '../requisito/requisito-list/requisito-list.component';
import {RequisitoDetailComponent} from '../requisito/requisito-detail/requisito-detail.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {CasodeusoListComponent} from '../casodeuso/casodeuso-list/casodeuso-list.component'
import {CasodeusoDetailComponent} from "../casodeuso/casodeuso-detail/casodeuso-detail.component"
import { RequisitoCreateComponent } from '../requisito/requisito-create/requisito-create.component';
import { CasoCreateComponent } from '../casodeuso/caso-create/caso-create.component';
import { DesarrolladorListComponent } from '../desarrollador/desarrollador-list/desarrollador-list.component';
import {DesarrolladorDetailComponent} from "../desarrollador/desarrollador-detail/desarrollador-detail.component"
import { EquipodesarrolloListComponent } from '../equipodesarrollo/equipodesarrollo-list/equipodesarrollo-list.component';
import {ListarIteracionComponent} from '../iteracion/listar-iteracion/listar-iteracion.component';
import {IteracionDetailComponent}  from '../iteracion/iteracion-detail/iteracion-detail.component';
import { EquipoDesarrolloDetailComponent } from '../equipodesarrollo/equipodesarrollo-detail/equipodesarrollo-detail.component';
import {DesarrolladorCreateComponent}  from '../desarrollador/desarrollador-create/desarrollador-create.component';
import { EquipodesarrolloCreateComponent } from '../equipodesarrollo/equipodesarrollo-create/equipodesarrollo-create.component';
import {IteracionCreateComponent}  from '../iteracion/iteracion-create/iteracion-create.component';
import { ProyectoListComponent } from '../proyecto/proyecto-list/proyecto-list.component';
import { ProyectoDetailComponent }  from '../proyecto/proyecto-detail/proyecto-detail.component';
import { ProyectoCreateComponent }  from '../proyecto/proyecto-create/proyecto-create.component';
import { ModificacionesListComponent } from '../modificacion/modificacion-list/modificaciones-list.component';

const routes: Routes = [
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    //{
    //    path: 'home',
      //  component: AuthLoginComponent
    {
        path: '**',
        redirectTo: 'home',
    },
    {
        path:"requisito",
        children:[
           {
             path:'list',
             component: RequisitoListComponent
           },
           {
             path:':id',
             component: RequisitoDetailComponent
           }
        ]
      },
      {
        
        path:'casos',
        children:[
          {
            path: 'list',
            component: CasodeusoListComponent
          },{
            path: ":id",
            component: CasodeusoDetailComponent
          }
        ]
      },
      {
        path:'casos2',
        component:CasoCreateComponent
      }, 
      {
        path:'requisitoC',
        component:RequisitoCreateComponent
      }, 
      {
          path:"desarrollador",
          children:[
             {
               path:'list',
               component: DesarrolladorListComponent
             },
             {
               path:':id',
               component: DesarrolladorDetailComponent

             }
          ]
        },
        {

          path:'desarrollador2',
          component:DesarrolladorCreateComponent
        },
        {
          path:"equipodesarrollo2",
          component: EquipodesarrolloCreateComponent
        },
        {
          path:"equipodesarrollo",
          children:[
            {
              path:'list',
              component: EquipodesarrolloListComponent
            },
            {
              path:':id',
              component: EquipoDesarrolloDetailComponent
            }
          ]
          },
          {
          path: 'iteracion',
          children: [{
            path: 'list',
            component: ListarIteracionComponent
          },
          {
            path: ':id',
            component: IteracionDetailComponent,
            outlet: 'detail'
          }
          ]
        },
        {
          path:"crearIteracion",
          component: IteracionCreateComponent
        },
        {
          path: 'proyecto',
          children: [{
            path: 'list',
            component: ProyectoListComponent
          },
          {
            path: ':id',
            component: IteracionDetailComponent,
            outlet: 'detail'
          }
          ]
        },
        {
          path:"crearProyecto",
          component: IteracionCreateComponent
        },
        {
          path: 'modificaciones',
          children: [{
            path: 'list',
            component: ModificacionesListComponent
          }]
        }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
