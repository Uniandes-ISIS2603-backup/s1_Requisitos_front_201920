import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Observable } from 'rxjs';
import { Modificacion } from './modificacion';
import {environment} from "../../environments/environment";
const API_URL= environment.apiURL;

@Injectable()
export class ModificacionService {

  constructor(private http:HttpClient) { }

  getModificaciones() :Observable<Modificacion[]> {
    return this.http.get<Modificacion[]>(API_URL + '/modificaciones' );
  }
  getModificacion(modId):Observable<Modificacion>{
    return this.http.get<Modificacion>(API_URL+  '/modificaciones/'+modId);
  }
  createEquipoDesarrollo(mod:Modificacion): Observable<Modificacion> {
    return this.http.post<Modificacion>(API_URL + '/modificacion', mod);
}
}