import { Streamable } from "./Streamable";

/* Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de 
la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.

*/

export abstract class BasicStreamableCollection<T> implements Streamable<T> {

    // Atributos
    protected streamableCollection: T[];

    // Constructor
    constructor(streamableCollection: T[]) {
        this.streamableCollection = streamableCollection;
    }

   // Métodos
    abstract searchById(id: number): T | undefined;
    abstract searchByTitle(title: string): T | undefined;
    abstract searchByYear(year: number): T | undefined;

}




/*

interfaz streamable (Principio solid se puede dividir la interfaz en varias interfaces mas pequeñas?)

La interfaz streamable tiene 3 metodos 
searchById(id: number): T;
searchByTitle(title: string): T;
searchByYear(year: number): T;

En cuanto a los propiedades de la interfaz streamable cuales pondria?


clase Peluicula
clase Serie
clase Documental


clase BasicStreamableCollection implementa Streamable

clase PeliculasCollection extiende BasicStreamableCollection   -----> array de peliculas ----> es de tipo Peluicula
clase SeriesCollection extiende BasicStreamableCollection   -----> array de series  ----->  es de tipo Serie
clase DocumentalesCollection extiende BasicStreamableCollection  -----> array de documentales ----> es de tipo Documental

*/

