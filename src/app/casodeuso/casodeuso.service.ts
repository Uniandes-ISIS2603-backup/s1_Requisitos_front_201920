import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Casodeuso} from './Casodeuso';
import {CasodeusoDetail} from "./casodeuso-detail"
import {environment} from "../../environments/environment";
import { tap } from "rxjs/operators";

//const API_URL= "../../assets/";
const API_URL= environment.apiURL;
const casos='casos.json';

@Injectable()
export class CasodeusoService {
  constructor(private http: HttpClient) {}

  getCasos(): Observable<Casodeuso[]> {
    return this.http.get<Casodeuso[]>(API_URL + '/casos');
  }

  getCasosDetail(casoId):Observable<CasodeusoDetail>{
    return this.http.get<CasodeusoDetail>(API_URL+'/casos/'+casoId);
  }

  createCaso(caso:Casodeuso): Observable<Casodeuso> {
    console.log(caso.nombre);
    return this.http.post<CasodeusoDetail>(API_URL + '/casos',caso).pipe(tap((caso:Casodeuso)=>console.log(caso.id)));
}

}