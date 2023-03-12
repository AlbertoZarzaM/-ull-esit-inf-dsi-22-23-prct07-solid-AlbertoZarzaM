import { StreamableProperties } from "./StreamableProperties";


/**
 * Clase Serie 
 * @returns Retorna una instancia de la clase Serie
 * 
 */
export class Serie implements StreamableProperties {

   id: number;
   title: string;
   year: number;
   private episodes: number;
   private company: string;



  constructor(id: number, title: string, year: number, company: string, episodes: number) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.episodes = episodes;
    this.company = company;
  }


  /**
   * 
   * @returns Retorna el año de lanzamiento de la serie
   */
  getYear(): number {
    return this.year;
  }

  /**
   * 
   * @returns Retorna el título de la serie
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * 
   * @returns Retorna el ID de la serie
   * 
   */
  getId(): number {
    return this.id;
  }

  /**
   * 
   * @returns Retorna el número de episodios de la serie
   */
  getEpisodes(): number {
    return this.episodes;
  }

  /**
   * 
   * @returns Retorna la compañía de la serie
   */
  getCompany(): string {
    return this.company;
  }

}