import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Casodeuso} from './Casodeuso';

const API_URL= "../../assets/";
const casos='casos.json';
@Injectable()
export class CasodeusoService {
  constructor(private http: HttpClient) {}

  getCasos(): Observable<Casodeuso[]> {
    return this.http.get<Casodeuso[]>(API_URL + casos);
  }
}