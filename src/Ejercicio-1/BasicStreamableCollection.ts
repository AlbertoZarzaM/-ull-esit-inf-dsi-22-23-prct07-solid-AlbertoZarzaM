import { Streamable } from "./Streamable";

/* Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de 
la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.

*/

export abstract class BasicStreamableCollection<T> implements Streamable<T> {

    // Propiedades
    id: number;
    title: string;
    year: number;

    // Métodos
    abstract searchById(id: number): T;
    abstract searchByTitle(title: string): T;
    abstract searchByYear(year: number): T;

}

