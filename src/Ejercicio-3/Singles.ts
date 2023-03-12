



import { Cancion } from './Cancion';

/**
 * Clase que representa un single
 * @param nombre Nombre del single
 * @param año Año de lanzamiento del single
 * @param versiones Lista de versiones del single
 * @param cancion Canción del single
 * @returns Retorna una instancia de la clase Singles
 * 
 */
export class Singles {


  nombre: string;
  año: number;
  versiones: Cancion[];
  cancion: Cancion | undefined;

  constructor(nombre: string, año: number, versiones: Cancion[], cancion?: Cancion ) {
      this.nombre = nombre;
      this.año = año;
      this.cancion = cancion;
      this.versiones = versiones;
  }

  /**
   * 
   * @returns Retorna la canción del single
   * 
   */
  getCanciones(): Cancion[]  {
          return this.versiones;
    
  
    
  }
}