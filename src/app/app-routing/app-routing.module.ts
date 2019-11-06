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
    //},
    {
        path: '**',
        redirectTo: 'home',
    },
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
