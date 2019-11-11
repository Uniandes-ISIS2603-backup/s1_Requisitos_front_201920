export class Requisito
{
     /**
      * id del requisito
      */
    id:number;
     /**
     * Fuente de donde se escribe el requisito
     */
     fuente:String;
    /**
     * Autor del requisito
     */
    autor: String;
    /**
     * Informacion que tiene el requisito
     */
    descripcion: String ;
    /**
     * Numero que representa la importancia del requisito
     */
    importancia: number ;
    /**
     * Boolena que representa si el requisito es estable(fijo)
     */
    estabilidad: boolean;
    /**
     * Comentarios adicionales sobre el requisito
     */
    comentariosAdicionales:String;
    /**
     * nombre del requisito
     */
    nombre:String;
    /**
     * tipo del requisito
     */
    tipo:number;

}