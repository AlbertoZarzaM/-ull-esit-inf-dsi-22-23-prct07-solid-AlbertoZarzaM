
# Informe práctica 6

***Por: Alberto Zarza Martín (alu0101412993@ull.edu.es)***

## Introducción

  En esta práctica vamos a realizar 3 ejercicios que nos ayudarán a profundizar en el uso de las clases y las interfaces en TypeScript. Además, vamos a desarrollar 1 ejercicio que se ha propuesto en la sesion de practicas para practicar y verficicar los conocimientos adquiridos en las clases anteriores.

## Dispositivo de trabajo

  Para el desarrollo de esta práctica he utilizado un sistema operativo Ubuntu por lo cual algunos de los pasos realizados solo estarán disponibles para los usuarios que utilicen este sistema operativo.

## Coveralls

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-AlbertoZarzaM/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-AlbertoZarzaM?branch=master)


## Ejercicio 1

En este ejercicio se nos ha pedido desarrollar el modelo de datos de una plataforma streaming, para ello se nos ha pedido que incorporemos en el catalogo de la plataforma peliculas, series y documentales. 

En cuanto a las clases pelicula, serie y documental, estas deben tener los siguientes atributos:

  - id: number
  - title: string
  - year: number

Estos estan definidos en la interfaz StreamableProperties. 

Además, las clases contienen  los siguientes métodos:

  - getYear(): number
  - getTitle(): string
  - getId(): number

Pero cada una tiene sus particularidades, por lo que se han definido los siguientes métodos:

  - Pelicula: no tiene métodos adicionales
  - Serie: getEpisodes(): number
  - Documental: getDuration(): number

Para poder realizar la búsqueda de los elementos en el catálogo de la plataforma, se ha definido la interfaz Streamable que contiene los siguientes métodos:

  - searchById(id: number): T | undefined
  - searchByTitle(title: string): T | undefined
  - searchByYear(year: number): T | undefined

Además, en la interfaz Streamable se han definido los siguientes atributos:

  - id: number
  - title: string

Que definen un identificador y un título para el catálogo.

Por último, se ha definido la clase abstracta BasicStreamableCollection que contiene los siguientes atributos:

  - id: number
  - title: string
  - streamableCollection: T[]

Y los siguientes métodos:

  - addStreamable(streamable: T): void
  - getTitle(): string
  - getID(): number

Además, la clase abstracta BasicStreamableCollection implementa la interfaz Streamable.

Para poder realizar la búsqueda de los elementos en el catálogo de la plataforma, se ha definido la clase PeliculasCollection que extiende de BasicStreamableCollection y que implementa la interfaz Streamable.

En esta clase se han definido los siguientes métodos:

  - searchById(id: number): T | undefined
  - searchByTitle(title: string): T | undefined
  - searchByYear(year: number): T | undefined

Además, se ha definido la clase SeriesCollection que extiende de BasicStreamableCollection y que implementa la interfaz Streamable.

En esta clase se han definido los siguientes métodos:

  - searchById(id: number): T | undefined
  - searchByTitle(title: string): T | undefined
  - searchByYear(year: number): T | undefined

Además, se ha definido la clase DocumentalesCollection que extiende de BasicStreamableCollection y que implementa la interfaz Streamable.

En esta clase se han definido los siguientes métodos:

  - searchById(id: number): T | undefined
  - searchByTitle(title: string): T | undefined
  - searchByYear(year: number): T | undefined

### Código

```TypeScript


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

```
En este caso podemos ver la interfaz generica Streamable que contiene los atributos id y title, que son comunes a todas las clases que implementan esta interfaz. Además, contiene los métodos searchById, searchByTitle y searchByYear que son comunes a todas las clases que implementan esta interfaz. Por último, contiene los métodos addStreamable, getTitle y getID que son comunes a todas las clases que extienden de BasicStreamableCollection.



```TypeScript

export interface StreamableProperties {
    id: number;
    title: string;
    year: number;
}

```

En este caso podemos ver la interfaz StreamableProperties que contiene los atributos id, title y year, que son comunes a todas las clases que implementan esta interfaz. 

```TypeScript


export class Documental implements StreamableProperties{

  id: number;
  title: string;
  year: number;
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

```

En este caso podemos ver la clase Documental que implementa la interfaz StreamableProperties. Esta clase contiene los atributos id, title, year y duration. Además, contiene los métodos getYear, getTitle, getId y getDuration.

Los metodos son getters de los atributos de la clase.


```TypeScript
  
export class Pelicula implements StreamableProperties{

   id: number;
   title: string;
   year: number;

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

```
La clase Pelicula implementa la interfaz StreamableProperties. Esta clase contiene los atributos id, title y year. Además, contiene los métodos getYear, getTitle e getId.

Los metodos son getters de los atributos de la clase.

```TypeScript

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

  getCompany(): string {
    return this.company;
  }

}

```

La clase Serie implementa la interfaz StreamableProperties. Esta clase contiene los atributos id, title, year, episodes y company. Además, contiene los métodos getYear, getTitle, getId, getEpisodes y getCompany.

Los metodos son getters de los atributos de la clase.

```TypeScript

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

```

La clase abstracta BasicStreamableCollection implementa la interfaz Streamable. Esta clase contiene los atributos id, title y streamableCollection. Además, contiene los métodos searchById, searchByTitle, searchByYear, addStreamable, getTitle y getID.

Los metodos se especifican para que las clases que hereden de esta clase los implementen.

```TypeScript


export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  constructor(collection: Pelicula[], name: string, id: number) {
    super(collection, id, name);
  }

  // Métodos
  searchById(id: number): Pelicula | undefined {
    
    if (this.streamableCollection.find((pelicula) => pelicula.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((pelicula) => pelicula.getId() === id);
    }

  }
  searchByTitle(title: string): Pelicula| undefined{
    
    if (this.streamableCollection.find((pelicula) => pelicula.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((pelicula) => pelicula.getTitle() === title);
    }
  
  }

  searchByYear(year: number): Pelicula | undefined {
    
    if (this.streamableCollection.find((pelicula) => pelicula.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((pelicula) => pelicula.getYear() === year);
    }
  }

  addStreamable(streamable: Pelicula): void {
      
      if (this.streamableCollection.find((pelicula) => pelicula.getId() === streamable.getId()) === undefined) {
        this.streamableCollection.push(streamable);
      }
      else {
        console.log("La pelicula ya existe");
      }
  
    }
    getTitle(): string {
      return this.title;
    }
    getID(): number {
      return this.id;
    }
}

```

La clase PeliculasCollection hereda de BasicStreamableCollection. Esta clase contiene los atributos id, title y streamableCollection. Además, contiene los métodos searchById, searchByTitle, searchByYear, addStreamable, getTitle y getID.

La lógica de los metodos de la clase es la siguiente:

  * searchById: busca una pelicula por su id. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * searchByTitle: busca una pelicula por su titulo. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * searchByYear: busca una pelicula por su año. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * addStreamable: añade una pelicula a la coleccion. Si la pelicula ya existe, no la añade. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * getTitle: devuelve el titulo de la coleccion. Este método es un getter del atributo title.
  * getID: devuelve el id de la coleccion. Este método es un getter del atributo id.

```TypeScript


export class SeriesCollection extends BasicStreamableCollection<Serie> {

  constructor(collection: Serie[], name: string, id: number) {
    super(collection, id, name );
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

  addStreamable(streamable: Serie): void {
      
      if (this.streamableCollection.find((serie) => serie.getId() === streamable.getId()) === undefined) {
        this.streamableCollection.push(streamable);
      }
      else {
        console.log("La serie ya existe");
      }
  
    }
    getTitle(): string {
      return this.title;
    }
    getID(): number {
      return this.id;
    }


}
  
  ```

La clase SeriesCollection hereda de BasicStreamableCollection. Esta clase contiene los atributos id, title y streamableCollection. Además, contiene los métodos searchById, searchByTitle, searchByYear, addStreamable, getTitle y getID.

La logica de los metodos de la clase es la siguiente:

  * searchById: busca una serie por su id. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * searchByTitle: busca una serie por su titulo. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * searchByYear: busca una serie por su año. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * addStreamable: añade una serie a la coleccion. Si la serie ya existe, no la añade. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * getTitle: devuelve el titulo de la coleccion. Este método es un getter del atributo title.
  * getID: devuelve el id de la coleccion. Este método es un getter del atributo id.

```TypeScript


export class DocumentalesCollection extends BasicStreamableCollection<Documental> {

  constructor(collection: Documental[], name: string, id: number) {
    super(collection, id, name );
  }

  // Métodos
  searchById(id: number): Documental | undefined {
    
    if (this.streamableCollection.find((documental) => documental.getId() === id) === undefined) {
      return undefined;
    } else {
      return this.streamableCollection.find((documental) => documental.getId() === id); 
    }

  }
  searchByTitle(title: string): Documental| undefined{
    
    if (this.streamableCollection.find((documental) => documental.getTitle() === title) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((documental) => documental.getTitle() === title);
    }
  
  }

  searchByYear(year: number): Documental | undefined {
    
    if (this.streamableCollection.find((documental) => documental.getYear() === year) === undefined) {
      return undefined;
    }
    else {
      return this.streamableCollection.find((documental) => documental.getYear() === year);
    }
  }

  addStreamable(streamable: Documental): void {

    if (this.streamableCollection.find((documental) => documental.getId() === streamable.getId()) === undefined) {
      this.streamableCollection.push(streamable);
    }
    else {
      console.log("El documental ya existe");
    }

  }

  getTitle(): string {
    return this.title;
  }
  getID(): number {
    return this.id;
  }
}

```

La clase DocumentalesCollection hereda de BasicStreamableCollection. Esta clase contiene los atributos id, title y streamableCollection. Además, contiene los métodos searchById, searchByTitle, searchByYear, addStreamable, getTitle y getID.

La logica de los metodos de la clase es la siguiente:

  * searchById: busca un documental por su id. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * searchByTitle: busca un documental por su titulo. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * searchByYear: busca un documental por su año. Si no existe devuelve undefined. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * addStreamable: añade un documental a la coleccion. Si el documental ya existe, no lo añade. Para ello, se utiliza el método find de la clase Array. Este método recorre el array y devuelve el primer elemento que cumpla la condición. Si no encuentra ninguno devuelve undefined.
  * getTitle: devuelve el titulo de la coleccion. Este método es un getter del atributo title.
  * getID: devuelve el id de la coleccion. Este método es un getter del atributo id.


## Ejercicio 2

Para este ejercicio se ha creado una clase llamada myList. Esta clase contiene los atributos list y length. Además, contiene los métodos length, get, push, append y concatenate. La clase myList es una clase genérica, es decir, puede recibir cualquier tipo de dato. Este ejercicio pretende crear una lista de elementos de cualquier tipo, sin utilizar los metodos de la clase Array. Para ello, se han creado nuestros propios metodos.

Los atributos de la clase son los siguientes:

  * list: es un array de tipo T. Este array es privado, por lo que solo se puede acceder a él desde la propia clase.
  * length: es un atributo de tipo number. Este atributo es privado, por lo que solo se puede acceder a él desde la propia clase.

Los métodos de la clase son los siguientes:

  * length: devuelve el tamaño de la lista. Para ello, se recorre el array list hasta que se encuentra un elemento undefined. El tamaño de la lista es el número de elementos que hay hasta ese elemento.
  * get: devuelve el elemento de la lista que se encuentra en la posición index. Para ello, se devuelve el elemento que se encuentra en la posición index del array list.
  * push: añade un elemento a la lista. Para ello, se añade el elemento item al final del array list.
  * append: añade una lista a la lista. Para ello, se recorre la lista que se pasa como parámetro y se añaden sus elementos a la lista.
  * concatenate: combina todos los elementos de una lista de listas en una única lista. Para ello, se recorre la lista de listas que se pasa como parámetro y se añaden sus elementos a la lista.
  * map: aplica una función a cada elemento de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento.
  * forEach: recorre la lista y aplica una función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento.
  * reduce: reduce la lista a un único valor. Para ello, se recorre la lista y se aplica la función a cada elemento.
  * filter: filtra los elementos de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento.
  * reverse: invierte el orden de los elementos de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento.


```TypeScript

export class myList<T>{

  constructor(private list: T[]){}

  public length(): number{
    let length = 0;
    while(this.list[length] !== undefined){
      length++;
    }
    return length;
  }

  public get(index: number): T{

    
    return this.list[index];
  }

  public push(item: T): void{
    this.list[this.length()] = item;
  }

  public append(list: myList<T>): void{
    for(let i = 0; i < list.length(); i++){
      this.push(list.get(i));
    }
  }
  
  //Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
  public concatenate (...lists: myList<T>[]): myList<T>{

    const newList: myList<T> = new myList(this.list);
    let i = 0;
    while (lists[i] !== undefined){
      newList.append(lists[i]);
      i++;
    }
    return newList;   
  }

  public map(f: (item: T) => T): myList<T>{
    const newList: myList<T> = new myList([]);
    for(let i = 0; i < this.length(); i++){
      newList.push(f(this.get(i)));
    }
    return newList;
  }

  public filter(f: (item: T) => boolean): myList<T>{

    const newList: myList<T> = new myList([]);
    for(let i = 0; i < this.length(); i++){
      if(f(this.get(i))){
        newList.push(this.get(i));
      }
    }
    return newList;
  }

  //Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.
  public reduce(f: (acum: T, item: T) => T, acum: T): T{
    for(let i = 0; i < this.length(); i++){
      acum = f(acum, this.get(i));
    }
    return acum;
  }

  public reverse(): myList<T>{
    const newList: myList<T> = new myList([]);
    for(let i = this.length() - 1; i >= 0; i--){
      newList.push(this.get(i));
    }
    return newList;
  }

  public forEach(f: (item: T) => void): void{
    for(let i = 0; i < this.length(); i++){
      f(this.get(i));
    }
  }


}

```

Pasando a los metodos de la clase, vamos a observar la lógica detras de cada uno de ellos:

  * length: devuelve el tamaño de la lista. Para ello, se recorre el array list hasta que se encuentra un elemento undefined. El tamaño de la lista es el número de elementos que hay hasta ese elemento. Esto es usando un bucle while y un contador que se incrementa en cada iteración.
  * get: devuelve el elemento de la lista que se encuentra en la posición index. Para ello, se devuelve el elemento que se encuentra en la posición index del array list. Para ello, se devuelve el elemento que se encuentra en la posición index del array list, meddiante el operador [], que si esta permitido en para el desarrollo de este ejercicio.
  * push: añade un elemento a la lista. Para ello, se añade el elemento item al final del array list. Para ello, se añade el elemento item al final del array list, mediante el operador [] y el atributo length de la lista. 
  * append: añade una lista a la lista. Para ello, se recorre la lista que se pasa como parámetro y se añaden sus elementos a la lista. Para ello, se recorre la lista que se pasa como parámetro y se añaden sus elementos a la lista. Para ello, se recorre la lista que se pasa como parámetro y se añaden sus elementos a la lista obteniendo el tamaño de la lista con el método length() y el método push().
  * concatenate: combina todos los elementos de una lista de listas en una única lista. Para ello, se recorre la lista de listas que se pasa como parámetro y se añaden sus elementos a la lista. Para ello, se recorre la lista de listas que se pasa como parámetro y se añaden sus elementos a la lista. Para ello, se recorre la lista de listas que se pasa como parámetro y se añaden sus elementos a la lista obteniendo el tamaño de la lista con el método length() y el método append().
  * map: aplica una función a cada elemento de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Devolviendo una nueva lista con los elementos modificados.
  * forEach: recorre la lista y aplica una función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Sin devolver nada.
  * reduce: reduce la lista a un único valor. Para ello, se recorre la lista y se aplica la función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Para ello, se recorre la lista y se aplica la función a cada elemento. Devolviendo un único valor.
  * filter: filtra los elementos de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento. En este caso se usa la función callback para filtrar los elementos de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento. En este caso se usa la función callback para filtrar los elementos de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento. En este caso se usa la función callback para filtrar los elementos de la lista. Devolviendo una nueva lista con los elementos filtrados.
  * reverse: invierte el orden de los elementos de la lista. Para ello, se recorre la lista y se aplica la función a cada elemento. La lógica tras este método es crear una nueva lista y añadir los elementos de la lista original en orden inverso. Para ello, se recorre la lista y se aplica la función a cada elemento. La lógica tras este método es crear una nueva lista y añadir los elementos de la lista original en orden inverso. Para ello, se recorre la lista y se aplica la función a cada elemento. La lógica tras este método es crear una nueva lista y añadir los elementos de la lista original en orden inverso. Devolviendo una nueva lista con los elementos en orden inverso.

## Ejercicio 3

En este ejercicio se nos ha pedido ampliar la Biblioteca musical desarrollada en la práctica 5, en este caso los requisitos son los siguientes:

  * Modificar la clase Discografia para que pueda aceptar una coleccion de discos o de singles. Tendremos que hacer que acepte tanto una colección de discos, singles o ambos.
  * Añadir una nueva clase Single que contemple la nueva endidad single.
  * Modificar la clase Artista para que pueda aceptar una coleccion de discos, singles o ambos.

### Clase Single

```typescript
export class Singles {


  nombre: string;
  año: number;
  versiones: Cancion[];
  cancion: Cancion | undefined;

  constructor(nombre: string, año: number, versiones: Cancion[], cancion?: Cancion ) {
      this.nombre = nombre;
      this.año = año;
      this.cancion = cancion;
      this.versiones = versiones;
  }

  getCanciones(): Cancion[]  {
    
    if (this.versiones) {
      return this.versiones;
    }
    else {
      return [];
    }
    
  }
}

```

He creado una clase Single que contiene los atributos nombre, año, versiones y cancion. La clase Single extiende de la clase Cancion, por lo que hereda sus atributos y metodos. La clase Single contiene un metodo getCanciones que devuelve un array de canciones, en este caso devuelve las versiones de la cancion.



### Clase Discografia

```typescript

export class Discografia <T extends Disco | Singles> {

    nombre: string;
    discografia: T[];

    constructor(nombre: string, discografia: T[]) {
        this.nombre = nombre;
        this.discografia = discografia;
    }

}         

```

He creado una clase Discografia que acepta un tipo generico que extienda de Disco o Singles, de esta forma podremos crear una discografia de discos, singles o ambos.

### Modificaciones en la Clase Artista

```typescript
export class Artista {
  nombre: string;
  oyentes: number;
  discografia: Discografia<Disco | Singles>;

  constructor(nombre: string, oyentes: number, discografia: Discografia<Disco | Singles>) {
      this.nombre = nombre;
      this.oyentes = oyentes;
      this.discografia = discografia;
  }
}
```	

Hemos modificado la clase Artista para que acepte una discografia de tipo Disco o Singles, para ello hemos modificado la clase Discografia para que acepte un tipo generico que extienda de Disco o Singles.


## Ejercicio 1PE102


```typescript

export interface Arithmeticable<T> {
  add(op: T): T;
  subtract(op: T): T;
  multiply(op: T): T;
  divide(op: T): T;
}

```

He creado una interfaz Arithmeticable que contiene los metodos add, subtract, multiply y divide. Estos metodos reciben como parametro un tipo generico T y devuelven un tipo generico T.

```typescript

export  class ArithmeticableCollection<T extends Arithmeticable<T>> {

  private elements: T[] = [];

  addArithmeticable(op: T): T {
    this.elements.push(op);
    return op;
  }

  getArithmeticable(index: number): T | undefined {
    if (index < 0 || index >= this.elements.length) {
      console.log('Index out of bounds');
      return undefined;
    }
    else {
      return this.elements[index];
    }
  }


  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }


}
  
  ``` 

He creado una clase ArithmeticableCollection que contiene un array de elementos de tipo generico T que extiende de la interfaz Arithmeticable. La clase contiene los metodos addArithmeticable, getArithmeticable y getNumberOfArithmeticables.

La logica de los metodos es la siguiente:

  * addArithmeticable: añade un elemento de tipo generico T al array de elementos.
  * getArithmeticable: devuelve un elemento de tipo generico T del array de elementos, en caso de que el indice sea incorrecto devuelve undefined.
  * getNumberOfArithmeticables: devuelve el numero de elementos del array de elementos.

```typescript


export class Complex implements Arithmeticable<Complex> {
  private real: number;
  private imaginary: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  /**
   * 
   * @param op 
   * @returns  {Complex}
   * 
   * @description Suma dos numeros complejos
   */
  add(op: Complex): Complex {
    return new Complex(this.real + op.real, this.imaginary + op.imaginary);
  }

  /**
   * 
   * @param op 
   * @returns  {Complex}
   * 
   * @description Suma dos numeros complejos
   */
  subtract(op: Complex): Complex {
    return new Complex(this.real - op.real, this.imaginary - op.imaginary);
  }

  multiply(op: Complex): Complex {
    return new Complex(this.real * op.real - this.imaginary * op.imaginary, this.real * op.imaginary + this.imaginary * op.real);
  }

  divide(op: Complex): Complex {
    return new Complex((this.real * op.real + this.imaginary * op.imaginary) / (op.real * op.real + op.imaginary * op.imaginary), (this.imaginary * op.real - this.real * op.imaginary) / (op.real * op.real + op.imaginary * op.imaginary));
  }

}
  
```

He creado una clase Complex que implementa la interfaz Arithmeticable y que contiene los metodos add, subtract, multiply y divide. Estos metodos reciben como parametro un objeto de tipo Complex y devuelven un objeto de tipo Complex.

La logica de los metodos es la siguiente:

  * add: suma dos numeros complejos y devuelve un objeto de tipo Complex.
  * subtract: resta dos numeros complejos y devuelve un objeto de tipo Complex.
  * multiply: multiplica dos numeros complejos y devuelve un objeto de tipo Complex.
  * divide: divide dos numeros complejos y devuelve un objeto de tipo Complex.


```typescript

export class Rational implements Arithmeticable<Rational> {

  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  /**
   * 
   * @param op 
   * @returns  {Rational}
   * 
   * @description Suma dos numeros racionales
   * 
   */
  add(op: Rational): Rational {
    return new Rational(this.numerator * op.denominator + this.denominator * op.numerator, this.denominator * op.denominator);
  }


  /**
   * 
   * @param op 
   * @returns  {Rational}
   * 
   * @description Resta dos numeros racionales
   * 
   */
  subtract(op: Rational): Rational {
    return new Rational(this.numerator * op.denominator - this.denominator * op.numerator, this.denominator * op.denominator);
  }

  /**
   * 
   * @param op 
   * @returns  {Rational}
   * 
   * @description Multiplica dos numeros racionales
   * 
   */
  multiply(op: Rational): Rational {
    return new Rational(this.numerator * op.numerator, this.denominator * op.denominator);
  }

  /**
   * 
   * @param op 
   * @returns  {Rational}
   * 
   * @description Divide dos numeros racionales
   * 
   */
  divide(op: Rational): Rational {
    return new Rational(this.numerator * op.denominator, this.denominator * op.numerator);
  }

}

```

He creado una clase Rational que implementa la interfaz Arithmeticable y que contiene los metodos add, subtract, multiply y divide. Estos metodos reciben como parametro un objeto de tipo Rational y devuelven un objeto de tipo Rational.

La logica de los metodos es la siguiente:

  * add: suma dos numeros racionales y devuelve un objeto de tipo Rational.
  * subtract: resta dos numeros racionales y devuelve un objeto de tipo Rational.
  * multiply: multiplica dos numeros racionales y devuelve un objeto de tipo Rational.
  * divide: divide dos numeros racionales y devuelve un objeto de tipo Rational.




## Conclusiones

 Gracias a la propuesta de estos ejercicios he podido ampliar mis conocimientos en gran medida sobre las clases abstractas y genericas y también sobre las interfaces genéricas en TypeScript. Además, he podido practicar con el uso de los arrays en TypeScript, ademas de con todos los métodos que ofrece el tipo de dato array. Por ultimo, destacar que he intentado priorizar la capacidad de poder resolver los ejercicios con todas las facilidades que me ofrece TypeScript, por lo que he intentado utilizar por ejemplo las funciones callback con los metodos map, filter, etc, para resolver los ejercicios. Además, he intentado cubrir todos los casos posibles de uso de los metodos que he creado, por lo que he intentado cubrir todos los casos de error posibles.

 