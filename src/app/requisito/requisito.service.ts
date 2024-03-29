import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requisito } from './requisito';
import { Observable } from 'rxjs';
import { RequisitoDetail } from './requisito-detail';
import { environment } from '../../environments/environment';
import { tap } from "rxjs/operators";
import {Desarrollador} from '../desarrollador/desarrollador';

const API_URL = environment.apiURL;
const requisito = 'requisitos.json';

@Injectable()
export class RequisitoService {

  constructor(private http: HttpClient) { }

  /**
  * Constructor of the service
  * @param http The HttpClient - This is necessary in order to perform requests
  */
  getRequisitos(): Observable<Requisito[]> {
    return this.http.get<Requisito[]>(API_URL + '/requisitos');
  }
  /**
   * Retorna un Requisito Detail
   */
  getRequisitoDetail(requisitoId: number): Observable<RequisitoDetail> {
    return this.http.get<RequisitoDetail>(API_URL + '/requisitos/' + requisitoId);
  }
  /**
   * Crea un requisito en la aplicacion
   */
  createRequisito(requisito: Requisito): Observable<Requisito> 
  {
    console.log(requisito.toString());
    return this.http.post<RequisitoDetail>(API_URL + '/requisitos', requisito).pipe(tap((requisito: Requisito) => console.log(requisito.id)));
  }
  /**
   * Elimina un requisito
   */
  deleteRequisito(reqId: number): Observable < Requisito > {
    return this.http.delete<RequisitoDetail>(API_URL + '/requisitos/'+reqId);
  }
  /**
   * Crea la relacion con caso de uso
   * @param reqId  id requisito
   * @param casId  id casodeuso
   */
  createRelacionCasoDeUso(reqId: number, casId: number): Observable < Requisito > 
  {
    console.log('/requisitos/'+reqId+'/casoDeUso/'+casId);
    return this.http.post<RequisitoDetail>(API_URL + '/requisitos/' + reqId + '/casodeuso/' + casId, null);
  }
/**
   * Crea la relacion con caso de uso
   * @param reqId  id requisito
   * @param casId  id casodeuso
   */
  createRelacionDesarrollador(reqId: number, desId: number): Observable < Requisito > {
    console.log('/requisitos/'+reqId+'/desarrolladorb/'+desId);
    return this.http.post<RequisitoDetail>(API_URL + '/requisitos/' + reqId + '/desarrolladorb/' + desId, null);
  }
}