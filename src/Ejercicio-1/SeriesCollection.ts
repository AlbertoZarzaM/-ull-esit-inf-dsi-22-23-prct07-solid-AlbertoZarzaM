import { Serie } from "./Serie";
import { BasicStreamableCollection } from "./BasicStreamableCollection";


/**
 * 
 * Clase que representa una colección de series
 * @param collection Colección de series
 * @param name Nombre de la colección
 * @param id ID de la colección
 * @returns Retorna una instancia de la clase SeriesCollection
 * 
 * 
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {

  constructor(collection: Serie[], name: string, id: number) {
    super(collection, id, name );
  }

  /**
   * 
   * @param id ID de la serie
   * @returns  Retorna la serie con el ID indicado
   */
  searchById(id: number): Serie | undefined {
    
    if (this.streamableCollection.find((serie) => serie.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((serie) => serie.getId() === id);
    }

  }

  /**
   * 
   * @param title Título de la serie
   * @returns  Retorna la serie con el título indicado
   */
  searchByTitle(title: string): Serie| undefined{
    
    if (this.streamableCollection.find((serie) => serie.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((serie) => serie.getTitle() === title);
    }
  
  }

  /**
   * 
   * @param year Año de lanzamiento de la serie
   * @returns   Retorna la serie con el año indicado
   */
  searchByYear(year: number): Serie | undefined {
    
    if (this.streamableCollection.find((serie) => serie.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((serie) => serie.getYear() === year);
    }
  }

  /**
   * 
   * @param streamable Serie a añadir
   */
  addStreamable(streamable: Serie): void {
      
      if (this.streamableCollection.find((serie) => serie.getId() === streamable.getId()) === undefined) {
        this.streamableCollection.push(streamable);
      }

  
    }
    /**
     * 
     * @returns Retorna el título del streamable
     */
    getTitle(): string {
      return this.title;
    }
    /**
     * 
     * @returns Retorna el ID del streamable
     */
    getID(): number {
      return this.id;
    }


}