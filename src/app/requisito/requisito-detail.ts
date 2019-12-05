import {Requisito} from "./requisito";
import {Casodeuso} from "../casodeuso/Casodeuso";
import {Desarrollador} from "../desarrollador/desarrollador";

export class RequisitoDetail extends Requisito
{
  descripcion: string;
  caso:Casodeuso;
  desarrollador:Desarrollador;
}