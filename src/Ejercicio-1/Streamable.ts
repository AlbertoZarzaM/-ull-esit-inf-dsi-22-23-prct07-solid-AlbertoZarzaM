/*

Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo,
 una colección de series. 
Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz,
que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.

*/

export interface Streamable<T> {
    
    // Métodos
    searchById(id: number): T | undefined;
    searchByTitle(title: string): T | undefined;
    searchByYear(year: number): T | undefined;
}


