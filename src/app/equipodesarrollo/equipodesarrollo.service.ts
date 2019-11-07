import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {EquipoDesarrollo} from './equipo-desarrollo';
import {EquipoDesarrolloDetail} from './equipodesarrollo-detail';
import {Observable } from 'rxjs';
const API_URL = "../../assets/";
const equiposdesarrollo= 'equiposdesarrollo.json';
@Injectable()
export class EquipodesarrolloService {

  constructor(private http:HttpClient) { }

  getEquipodesarrollo() :Observable<EquipoDesarrollo[]> {
    return this.http.get<EquipoDesarrollo[]>(API_URL + equiposdesarrollo);
  }
  getEquiposDetail(equipoId):Observable<EquipoDesarrolloDetail>{
    return this.http.get<EquipoDesarrolloDetail>(API_URL+"equipo"+equipoId+".json");
  }
  createEquipoDesarrollo(equipo): Observable<EquipoDesarrolloDetail> {
    return this.http.post<EquipoDesarrolloDetail>(API_URL + equiposdesarrollo, equipo);
}
}