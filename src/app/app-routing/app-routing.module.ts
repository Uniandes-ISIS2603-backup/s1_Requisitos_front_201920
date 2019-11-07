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
<<<<<<< HEAD
import { CasoCreateComponent } from '../casodeuso/caso-create/caso-create.component';
=======
import {DesarrolladorListComponent} from '../desarrollador/desarrollador-list/desarrollador-list.component'
import {DesarrolladorDetailComponent} from "../desarrollador/desarrollador-detail/desarrollador-detail.component"
>>>>>>> a3a5d7952a7e189a04c8dd80587cb50a63712545
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
<<<<<<< HEAD
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
        
=======
      {
>>>>>>> a3a5d7952a7e189a04c8dd80587cb50a63712545
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
<<<<<<< HEAD
        path:'casos2',
        component:CasoCreateComponent
      }  
=======
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
        }
>>>>>>> a3a5d7952a7e189a04c8dd80587cb50a63712545
        
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
