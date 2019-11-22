import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desarrollador } from './desarrollador';
import { DesarrolladorDetail } from './desarrollador-detail';
import {environment} from "../../environments/environment";
const API_URL= environment.apiURL;
const casos='desarrollador.json';
@Injectable()
export class DesarrolladorService {
  constructor(private http: HttpClient) {}

  getDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(API_URL + '/desarrollador');
  }
  getDesarrolladorDetail(desarrolladorId): Observable<DesarrolladorDetail>
    {
       return this.http.get<DesarrolladorDetail>(API_URL+'/desarrollador/'+desarrolladorId);
    }
    createDesarrollador(desarrollador): Observable<Desarrollador> {
      return this.http.post<Desarrollador>(API_URL + '/desarrollador', desarrollador);
  }
}