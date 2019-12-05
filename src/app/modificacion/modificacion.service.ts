import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ModificacionDetail } from "./modificacion-detail"
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
  createModificacion(mod:Modificacion): Observable<Modificacion> {
    return this.http.post<Modificacion>(API_URL + '/modificaciones', mod);
  }

  createRelacionRequisito(modId: number, reqId: number): Observable <Modificacion> {
    console.log('/modificaciones/'+modId+'/requisito/'+reqId);
  return this.http.post<ModificacionDetail>(API_URL + '/modificaciones/'+modId+'/requisitos/'+reqId, null);

  }

}