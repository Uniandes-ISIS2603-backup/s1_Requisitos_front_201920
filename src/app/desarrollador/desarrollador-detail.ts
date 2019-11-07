import{Requisito} from "../requisito/requisito"
import{Modificacion} from "../modificacion/modificacion"
import{Casodeuso} from "../casodeuso/Casodeuso"
import{EquipoDesarrollo} from "../equipodesarrollo/equipo-desarrollo"
export class DesarrolladorDetail {
    modificaciones:Modificacion[];
    casosdeuso:Casodeuso[];
    requisitos:Requisito[];
    equiposDesarrollo:EquipoDesarrollo[];
  }