import { Serie } from "./Serie";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

export class SeriesCollection extends BasicStreamableCollection<Serie> {

  constructor(collection: Serie[]) {
    super(collection);
  }

  // Métodos
  searchById(id: number): Serie | undefined {
    
    if (this.streamableCollection.find((serie) => serie.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((serie) => serie.getId() === id);
    }

  }
  searchByTitle(title: string): Serie| undefined{
    
    if (this.streamableCollection.find((serie) => serie.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((serie) => serie.getTitle() === title);
    }
  
  }

  searchByYear(year: number): Serie | undefined {
    
    if (this.streamableCollection.find((serie) => serie.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((serie) => serie.getYear() === year);
    }
  }
}