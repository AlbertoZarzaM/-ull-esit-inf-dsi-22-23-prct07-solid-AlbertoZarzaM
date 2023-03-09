


export class Pelicula {

  private id: number;
  private title: string;
  private year: number;

  constructor(id: number, title: string, year: number) {
    this.id = id;
    this.title = title;
    this.year = year;
  }

  toString(): string {
    return `id: ${this.id}, title: ${this.title}, year: ${this.year}`;
  }

  getYear(): number {
    return this.year;
  }
  getTitle(): string {
    return this.title;
  }

  getId(): number {
    return this.id;
  }


}