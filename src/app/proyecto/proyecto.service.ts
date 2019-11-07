import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from './proyecto';
import { Observable } from 'rxjs';


const API_URL = "../../assets/";
const proyecto = 'proyecto.json';

@Injectable()
export class ProyectoService {

  constructor(private http: HttpClient){ }

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    getProyectos() : Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(API_URL + proyecto);
    }
}