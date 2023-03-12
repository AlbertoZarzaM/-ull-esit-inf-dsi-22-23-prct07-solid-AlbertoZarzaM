import { Disco } from "./Disco";
import { Singles } from "./Singles";


/**
 * Clase Discografia
 * @param nombre Nombre de la discografia
 * @param discografia Lista de discos y singles
 * @returns Retorna una instancia de la clase Discografia
 * 
 */
export class Discografia <T extends Disco | Singles> {

    nombre: string;
    discografia: T[];

    constructor(nombre: string, discografia: T[]) {
        this.nombre = nombre;
        this.discografia = discografia;
    }

}         




