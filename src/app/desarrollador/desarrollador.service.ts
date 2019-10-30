import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desarrollador } from './desarrollador';

const API_URL= "../../assets/";
const casos='desarrollador.json';
@Injectable()
export class DesarrolladorService {
  constructor(private http: HttpClient) {}

  getDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(API_URL + casos);
  }
}