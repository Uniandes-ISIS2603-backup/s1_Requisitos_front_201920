import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iteracion } from './iteracion';
import { IteracionDetail } from './iteracion-detail';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

const API_URL = environment.apiURL;
const iteraciones = 'iteraciones.json';

@Injectable()
export class IteracionService {
 
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getIteraciones() : Observable<Iteracion[]> {
        return this.http.get<Iteracion[]>(API_URL + '/iteracion');
    }
     getIteracionDetail(iteracionId): Observable<IteracionDetail> {
        return this.http.get<IteracionDetail>(API_URL + '/iteracion/'+ iteracionId);
    }
    createIteracion(iteracion): Observable<IteracionDetail> {
        return this.http.post<IteracionDetail>(API_URL + '/iteracion', iteracion);
    }
    

}