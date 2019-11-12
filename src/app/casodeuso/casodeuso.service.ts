import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Casodeuso} from './Casodeuso';
import {CasodeusoDetail} from "./casodeuso-detail"
import {environment} from "../../environments/environment";
import { tap } from "rxjs/operators";
import { Desarrollador } from "../desarrollador/desarrollador";

//const API_URL= "../../assets/";
const API_URL= environment.apiURL;
const casos='casos.json';

@Injectable()
export class CasodeusoService {
  constructor(private http: HttpClient) {}

  getCasos(): Observable<CasodeusoDetail[]> {
    return this.http.get<CasodeusoDetail[]>(API_URL + '/casos');
  }

  getCasosDetail(casoId):Observable<CasodeusoDetail>{
    return this.http.get<CasodeusoDetail>(API_URL+'/casos/'+casoId);
  }

  createCaso(caso:Casodeuso): Observable<Casodeuso> {
    console.log(caso.nombre);
    return this.http.post<CasodeusoDetail>(API_URL + '/casos',caso);

  }
/*
  createRelacionResponsable(casoId:number, desId:number):  Observable<Casodeuso>{
    
    console.log(casoId);
    console.log(desId);
    console.log('/casos/'+casoId+'/desarolladorc/'+desId+'/1');
    return this.http.post<CasodeusoDetail>(API_URL + '/casos/'+casoId+'/desarolladorc/'+desId+'/1', null);
  }
*/
}