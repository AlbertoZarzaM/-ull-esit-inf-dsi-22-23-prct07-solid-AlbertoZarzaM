
import { Cancion } from './Cancion';


/**
 * Clase Disco
 * 
 * @param nombre Nombre del disco
 * @param año Año de publicación del disco
 * @param canciones Canciones del disco
 *
 */
export class Disco {
  nombre: string;
  año: number;
  canciones: Cancion[] ;

  constructor(nombre: string, año: number, canciones: Cancion[]) {
      this.nombre = nombre;
      this.año = año;
      this.canciones = canciones;
  }

  getCanciones(): Cancion[] {

    return this.canciones;
  }
}
