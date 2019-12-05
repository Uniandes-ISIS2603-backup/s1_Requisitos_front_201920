import { Desarrollador } from "../desarrollador/desarrollador"
import { Casodeuso } from "../casodeuso/Casodeuso"
import { Requisito } from "../requisito/requisito"

export class Modificacion {
    id:number
    fechaModificacion:Date
    descripcion:string
    desarrolladorModificaciones: Desarrollador

    casoModificaciones:Casodeuso;
    modificacionesRequisito:Requisito;
}