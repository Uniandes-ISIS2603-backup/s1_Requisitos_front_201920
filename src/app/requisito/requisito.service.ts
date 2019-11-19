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
  getRequisitoDetail(requisitoId): Observable<RequisitoDetail> {
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
   * Obtiene los desarrolladores de la aplicacion 
   */
  getDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(API_URL + '/desarrollador');
  }

}