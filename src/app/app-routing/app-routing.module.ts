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

import { CasoCreateComponent } from '../casodeuso/caso-create/caso-create.component';
import { DesarrolladorListComponent } from '../desarrollador/desarrollador-list/desarrollador-list.component';
import {DesarrolladorDetailComponent} from "../desarrollador/desarrollador-detail/desarrollador-detail.component"
import { EquipodesarrolloListComponent } from '../equipodesarrollo/equipodesarrollo-list/equipodesarrollo-list.component';

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
      },{
        
      

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
          path:"equipodesarrollo",
          children:[
            {
              path:'list',
              component: EquipodesarrolloListComponent
            },
            {
              path:'id',
              component: DesarrolladorDetailComponent
            }
          ]
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
