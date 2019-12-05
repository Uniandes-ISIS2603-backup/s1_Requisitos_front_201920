import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from './proyecto';
import { Observable } from 'rxjs';
import { ProyectoDetail } from './proyecto-detail';
import {environment} from "../../environments/environment";


const API_URL = environment.apiURL;
const proyecto = 'proyecto.json';

@Injectable()
export class ProyectoService {

  constructor(private http: HttpClient){ }

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    getProyectos() : Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(API_URL + '/proyecto');
    }
    getProyectoDetail(proyectoId): Observable<ProyectoDetail> {
      console.log(proyectoId+" "+API_URL + "/proyecto/" + proyectoId);
        return this.http.get<ProyectoDetail>(API_URL + "/proyecto/" + proyectoId);
    }
    createProyecto(proyecto): Observable<ProyectoDetail> {
        return this.http.post<ProyectoDetail>(API_URL +'/proyecto', proyecto);
    }
    
}