import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Casodeuso} from './Casodeuso';
import {CasodeusoDetail} from "./casodeuso-detail"

const API_URL= "../../assets/";
const casos='casos.json';
@Injectable()
export class CasodeusoService {
  constructor(private http: HttpClient) {}

  getCasos(): Observable<Casodeuso[]> {
    return this.http.get<Casodeuso[]>(API_URL + casos);
  }

  getCasosDetail(casoId):Observable<CasodeusoDetail>{
    return this.http.get<CasodeusoDetail>(API_URL+"caso-"+casoId+".json");
  }
}