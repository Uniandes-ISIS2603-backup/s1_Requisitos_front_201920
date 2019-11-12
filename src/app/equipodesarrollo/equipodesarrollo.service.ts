import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {EquipoDesarrollo} from './equipo-desarrollo';
import {EquipoDesarrolloDetail} from './equipodesarrollo-detail';
import {Observable } from 'rxjs';
import {environment} from "../../environments/environment";
//const API_URL = "../../assets/";
const API_URL = environment.apiURL;
const equiposdesarrollo= 'equiposdesarrollo.json';
@Injectable()
export class EquipodesarrolloService {

  constructor(private http:HttpClient) { }

  getEquipodesarrollo() :Observable<EquipoDesarrollo[]> {
    return this.http.get<EquipoDesarrollo[]>(API_URL + '/equipoDesarrollo');
  }
  getEquiposDetail(equipoId):Observable<EquipoDesarrolloDetail>{
    return this.http.get<EquipoDesarrolloDetail>(API_URL+ '/equipoDesarrollo/'+ equipoId);
  }
  createEquipoDesarrollo(equipo): Observable<EquipoDesarrollo> {
    return this.http.post<EquipoDesarrollo>(API_URL + '/equipoDesarrollo', equipo);
}
}