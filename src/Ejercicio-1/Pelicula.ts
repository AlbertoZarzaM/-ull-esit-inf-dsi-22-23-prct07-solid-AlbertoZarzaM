
import { StreamableProperties } from './StreamableProperties';


/**
 * 
 * @returns Retorna una instancia de la clase Pelicula
 * 
 * 
 */
export class Pelicula implements StreamableProperties{

   id: number;
   title: string;
   year: number;

  constructor(id: number, title: string, year: number) {
    this.id = id;
    this.title = title;
    this.year = year;
  }



  /**
   * 
   * @returns Retorna el año de lanzamiento de la película
   */
  getYear(): number {
    return this.year;
  }

  /**
   * 
   * @returns Retorna el título de la película
   * 
   */
  getTitle(): string {
    return this.title;
  }


  /**
   * 
   * @returns Retorna el ID de la película
   * 
   */
  getId(): number {
    return this.id;
  }


}