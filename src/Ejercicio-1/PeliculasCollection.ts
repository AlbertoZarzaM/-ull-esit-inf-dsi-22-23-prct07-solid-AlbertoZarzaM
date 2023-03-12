import { Pelicula } from "./Pelicula";
import { BasicStreamableCollection } from "./BasicStreamableCollection";


/**
 * clase PeliculasCollection 
 * @returns Retorna una instancia de la clase PeliculasCollection
 * 
 * 
 */
export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  constructor(collection: Pelicula[], name: string, id: number) {
    super(collection, id, name);
  }

  /**
   * 
   * @param id ID de la película
   * @returns   Retorna la película con el ID indicado
   */
  searchById(id: number): Pelicula | undefined {
    
    if (this.streamableCollection.find((pelicula) => pelicula.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((pelicula) => pelicula.getId() === id);
    }

  }

  /**
   * 
   * @param title Título de la película
   * @returns  Retorna la película con el título indicado
   */
  searchByTitle(title: string): Pelicula| undefined{
    
    if (this.streamableCollection.find((pelicula) => pelicula.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((pelicula) => pelicula.getTitle() === title);
    }
  
  }

    /**
     * 
     * @param year Año de lanzamiento de la película
     * @returns  Retorna la película con el año indicado
     */
  searchByYear(year: number): Pelicula | undefined {
    
    if (this.streamableCollection.find((pelicula) => pelicula.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((pelicula) => pelicula.getYear() === year);
    }
  }

  /**
   * 
   * @param streamable Película a añadir
   * @returns  Añade una película a la colección
   */
  addStreamable(streamable: Pelicula): void {
      
      if (this.streamableCollection.find((pelicula) => pelicula.getId() === streamable.getId()) === undefined) {
        this.streamableCollection.push(streamable);
      }
      else {
        console.log("La pelicula ya existe");
      }
  
    }

    /**
     * 
     * @returns Retorna el número de películas en la colección
     */
    getTitle(): string {
      return this.title;
    }

    /**
     * 
     * @returns Retorna el número de películas en la colección
     */
    getID(): number {
      return this.id;
    }
}
