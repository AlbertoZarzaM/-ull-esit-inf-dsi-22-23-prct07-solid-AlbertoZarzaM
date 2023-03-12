
import { Discografia } from './Discografia';
import { Disco } from './Disco';
import { Singles } from './Singles';

/**
 * Clase Artista
 * 
 * @param nombre Nombre del artista
 * @param oyentes Número de oyentes del artista
 * @param discografia Discografía del artista
 * 
 */
export class Artista {
  nombre: string;
  oyentes: number;
  discografia: Discografia<Disco | Singles>;

  constructor(nombre: string, oyentes: number, discografia: Discografia<Disco | Singles>) {
      this.nombre = nombre;
      this.oyentes = oyentes;
      this.discografia = discografia;
  }
}
