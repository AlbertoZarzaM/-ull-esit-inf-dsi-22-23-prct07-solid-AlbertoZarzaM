/*

Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo,
 una colección de series. 
Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz,
que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.

*/


/**
 * Interfaz genérica Streamable
 * 
 * @param id ID del streamable
 * @param title Título del streamable
 * @returns Retorna una instancia de la interfaz Streamable
 * 
 * @method searchById: Busca un streamable por su ID
 * @method searchByTitle: Busca un streamable por su título
 * @method searchByYear: Busca un streamable por su año
 * @method addStreamable: Agrega un streamable a la colección
 * @method getTitle: Retorna el título del streamable
 * @method getID: Retorna el ID del streamable
 * 
 */
export interface Streamable<T> {

    // Atributos
    id: number;
    title: string;
    // Métodos
    searchById(id: number): T | undefined;
    searchByTitle(title: string): T | undefined;
    searchByYear(year: number): T | undefined;

    addStreamable(streamable: T): void;
    getTitle(): string;
    getID(): number;


}


