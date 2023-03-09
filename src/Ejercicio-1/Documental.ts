



export class Documental {

  private id: number;
  private title: string;
  private year: number;
  private duration: number;

  constructor(id: number, title: string, year: number, duration: number) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  toString(): string {
    return `id: ${this.id}, title: ${this.title}, year: ${this.year}, duration: ${this.duration}`;
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

  getDuration(): number {
    return this.duration;
  }

}
  
