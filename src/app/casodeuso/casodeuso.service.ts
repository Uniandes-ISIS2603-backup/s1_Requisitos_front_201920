import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Casodeuso } from './Casodeuso';
import { CasodeusoDetail } from "./casodeuso-detail"
import { environment } from "../../environments/environment";

import { pipe } from 'rxjs'; 

import { mergeMap, switchMap, retry, 
  map, catchError, filter, scan } from 'rxjs/operators'; 

//const API_URL= "../../assets/";
const API_URL = environment.apiURL;
const casos = 'casos.json';

@Injectable()
export class CasodeusoService {
  constructor(private http: HttpClient) { }

  getCasos(): Observable<CasodeusoDetail[]> {
    return this.http.get<CasodeusoDetail[]>(API_URL + '/casos');
  }

  getCasosDetail(casoId): Observable<CasodeusoDetail> {
    return this.http.get<CasodeusoDetail>(API_URL + '/casos/' + casoId);
  }

  createCaso(caso: Casodeuso): Observable<Casodeuso> {
 
return  this.http.post<CasodeusoDetail>(API_URL + '/casos', caso).pipe(filter(n=> n.id!=null
  ))
  
}




createRelacionResponsable(casoId: number, desId: number): Observable < Casodeuso > {

  console.log('/casos/'+casoId+'/desarrolladorc/'+desId+'/1');
  return this.http.post<CasodeusoDetail>(API_URL + '/casos/' + casoId + '/desarrolladorc/' + desId + '/1', null);
}

createRelacionRepresentante(casoId: number, desId: number): Observable < Casodeuso > {

  //console.log('/casos/'+casoId+'/desarolladorc/'+desId+'/2');
  return this.http.post<CasodeusoDetail>(API_URL + '/casos/' + casoId + '/desarrolladorc/' + desId + '/2', null);
}

deleteCaso(casoId: number): Observable < Casodeuso > {
  return this.http.delete<CasodeusoDetail>(API_URL + '/casos/casoId');
}


}