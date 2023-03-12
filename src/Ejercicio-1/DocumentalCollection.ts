

import { Documental } from "./Documental";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Clase que hereda de BasicStreamableCollection
 * @param collection Colección de documentales
 * @param name Nombre de la colección
 * @param id ID de la colección
 * @returns Retorna una instancia de la clase DocumentalesCollection
 * 
 * 
 */
export class DocumentalesCollection extends BasicStreamableCollection<Documental> {

  constructor(collection: Documental[], name: string, id: number) {
    super(collection, id, name );
  }

  /***
   * 
   * @param id ID del documental
   * @returns Retorna el documental con el ID indicado
   * 
   */
  searchById(id: number): Documental | undefined {
    
    if (this.streamableCollection.find((documental) => documental.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((documental) => documental.getId() === id); 
    }

  }

  /***
   *  
   * @param title Título del documental
   * @returns Retorna el documental con el título indicado
   *  
   */
  searchByTitle(title: string): Documental| undefined{
    
    if (this.streamableCollection.find((documental) => documental.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((documental) => documental.getTitle() === title);
    }
  
  }

  /**
   * 
   * @param year Año de lanzamiento del documental
   * @returns  Retorna el documental con el año indicado
   */
  searchByYear(year: number): Documental | undefined {
    
    if (this.streamableCollection.find((documental) => documental.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((documental) => documental.getYear() === year);
    }
  }

    /**
     * 
     * @param streamable Documental a añadir
     * 
     * 
     */
  addStreamable(streamable: Documental): void {

    if (this.streamableCollection.find((documental) => documental.getId() === streamable.getId()) === undefined) {
      this.streamableCollection.push(streamable);
    }
    else {
      console.log("El documental ya existe");
    }

  }

  /**
   * 
   * @returns Retorna el título de la colección
   * 
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * 
   * @returns Retorna el ID de la colección
   * 
   */
  getID(): number {
    return this.id;
  }
}