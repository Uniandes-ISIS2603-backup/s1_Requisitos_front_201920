import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requisito } from './requisito';
import { Observable } from 'rxjs';
import {RequisitoDetail} from './requisito-detail';

const API_URL = "../../assets/";
const requisito = 'requisito.json';

@Injectable()
export class RequisitoService {

  constructor(private http: HttpClient){ }

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    getRequisitos() : Observable<Requisito[]> {
        return this.http.get<Requisito[]>(API_URL + requisito);
    }
    /**
     * Retorna un Requisito Detail
     */
    getRequisitoDetail(requisitoId): Observable<RequisitoDetail>
    {
       return this.http.get<RequisitoDetail>(API_URL+'requisito'+requisitoId+'.json');
    }
}