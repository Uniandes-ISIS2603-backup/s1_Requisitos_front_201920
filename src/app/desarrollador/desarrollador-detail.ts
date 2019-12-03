import{Requisito} from "../requisito/requisito"
import{Modificacion} from "../modificacion/modificacion"
import{Casodeuso} from "../casodeuso/Casodeuso"
import{EquipoDesarrollo} from "../equipodesarrollo/equipo-desarrollo"
import { Desarrollador } from "./desarrollador";
export class DesarrolladorDetail extends Desarrollador{
    modificaciones:Modificacion[];
    casosdeuso:Casodeuso[];
    requisitos:Requisito[];
    equiposDesarrollo:EquipoDesarrollo[];
  }