
/**
 * Clase Cancion
 * 
 * @param nombre Nombre de la canción
 * @param duracion Duración de la canción
 * @param géneros Géneros de la canción
 * @param single Si es single o no
 * @param reproducciones Número de reproducciones de la canción
 * 
 * 
 */
export class Cancion {
  nombre: string;
  duracion: number;
  géneros: string[];
  single: boolean;
  reproducciones: number;

  constructor(nombre: string, duracion: number, géneros: string[], single: boolean, reproducciones: number) {
      this.nombre = nombre;
      this.duracion = duracion;
      this.géneros = géneros;
      this.single = single;
      this.reproducciones = reproducciones;
  }
}
