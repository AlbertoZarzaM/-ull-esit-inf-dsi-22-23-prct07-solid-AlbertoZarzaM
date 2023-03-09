import { Pelicula } from "./Pelicula";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  constructor(collection: Pelicula[]) {
    super(collection);
  }

  // Métodos
  searchById(id: number): Pelicula | undefined {
    
    if (this.streamableCollection.find((pelicula) => pelicula.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((pelicula) => pelicula.getId() === id);
    }

  }
  searchByTitle(title: string): Pelicula| undefined{
    
    if (this.streamableCollection.find((pelicula) => pelicula.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((pelicula) => pelicula.getTitle() === title);
    }
  
  }

  searchByYear(year: number): Pelicula | undefined {
    
    if (this.streamableCollection.find((pelicula) => pelicula.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((pelicula) => pelicula.getYear() === year);
    }
  }
}
