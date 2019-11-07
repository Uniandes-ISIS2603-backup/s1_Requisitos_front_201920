import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iteracion } from './iteracion';
import { IteracionDetail } from './iteracion-detail';

import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const iteraciones = 'iteraciones.json';

@Injectable()
export class IteracionService {
 
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getIteraciones() : Observable<Iteracion[]> {
        return this.http.get<Iteracion[]>(API_URL + iteraciones);
    }
     getIteracionDetail(iteracionId): Observable<IteracionDetail> {
      console.log(iteracionId+" "+API_URL + "iteracion-" + iteracionId+".json");
        return this.http.get<IteracionDetail>(API_URL + "iteracion-" + iteracionId+".json");
    }
    

}