
import { StreamableProperties } from "./StreamableProperties";

/**
 * Clase Documental
 * @param id ID del documental
 * @param title Título del documental
 * @param year Año de lanzamiento del documental
 * @param duration Duración del documental
 * @returns Retorna una instancia de la clase Documental
 * 
 */
export class Documental implements StreamableProperties{

  id: number;
  title: string;
  year: number;
  private duration: number;

  constructor(id: number, title: string, year: number, duration: number) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.duration = duration;
  }


  /**
   * 
   * @returns Retorna la duración del documental 
   */
  getYear(): number {
    return this.year;
  }

  /**
   * 
   * @returns Retorna el título del documental
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * 
   * @returns Retorna el ID del documental
   * 
   */
  getId(): number {
    return this.id;
  }

    /**
     * 
     * @returns Retorna la duración del documental
     */
  getDuration(): number {
    return this.duration;
  }

}
  
