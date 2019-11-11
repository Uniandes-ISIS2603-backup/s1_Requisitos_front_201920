import { Desarrollador } from "../desarrollador/desarrollador";


export class Casodeuso {
    id: number;
    servicios: string[];
    nombre:string;
    //variable encargada de almacenar la documentacion del caso de uso
    documentacion: string;
    //variable encargada de almacenar los resultados de las pruebas del caso de uso
    pruebas: boolean;
    //variable encargada de almacenar las entidades involucradas en el caso
    entidades: string[];
    //variable encargada de almacenar los caminos de excepcion involucradas en el caso
    caminosExcepcion: string[];
    //variable encargada de almacenar las postcondiciones involucradas en el caso
    posCondiciones: string[];
    //variable encargada de almacenar las pre condicionesinvolucradas en el caso
    preCondiciones: string[];
    //variable encargada de almacenar los caminos alternos involucradas en el caso
    caminosAlternos: string[];

    representanteDelCliente: Desarrollador;
    responsable: Desarrollador;
  
  /*
    constructor(pId: number,pServicios: string[],pDocumentacion: string,pPruebas: boolean,pEntidades: string[],pCaminosExcepcion: string[],pPosCondiciones: string[],pPreCondiciones: string[],pCaminosAlternos: string[]){
  this.id= pId;
  this.servicios=pServicios;
  this.documentacion=pDocumentacion;
  this.pruebas=pPruebas;
  this.entidades=pEntidades;
  this.caminosExcepcion=pCaminosExcepcion;
  this.posCondiciones=pPosCondiciones;
  this.preCondiciones=pPreCondiciones;
  this.caminosAlternos=pCaminosAlternos;
    }
    */
  }