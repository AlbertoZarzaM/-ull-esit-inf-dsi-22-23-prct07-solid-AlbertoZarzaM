


export class Serie {

  private id: number;
  private title: string;
  private year: number;
  private episodes: number;

  constructor(id: number, title: string, year: number, episodes: number) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.episodes = episodes;
  }

  toString(): string {
    return `id: ${this.id}, title: ${this.title}, year: ${this.year}, episodes: ${this.episodes}`;
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

  getEpisodes(): number {
    return this.episodes;
  }

}