import { Streamable } from "./StreamableMethods";

/**
 * Clase abstracta que implementa la interfaz Streamable
 * @param id ID del streamable
 * @param title Título del streamable
 * @param streamableCollection Colección de streamables
 * @returns Retorna una instancia de la clase BasicStreamableCollection
 * 
 * @method searchById: Busca un streamable por su ID
 * @method searchByTitle: Busca un streamable por su título
 * @method searchByYear: Busca un streamable por su año
 * @method addStreamable: Agrega un streamable a la colección
 * @method getTitle: Retorna el título del streamable
 * @method getID: Retorna el ID del streamable
 * 
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {

    id: number;
    title: string;

    // Atributos
    protected streamableCollection: T[];

    // Constructor
    constructor(streamableCollection: T[], id: number, title: string) {
        this.streamableCollection = streamableCollection;
        this.id = id;
        this.title = title;
    }

   // Métodos
    abstract searchById(id: number): T | undefined;
    abstract searchByTitle(title: string): T | undefined;
    abstract searchByYear(year: number): T | undefined;
    abstract addStreamable(streamable: T): void;
    abstract getTitle(): string;
    abstract getID(): number;

}



