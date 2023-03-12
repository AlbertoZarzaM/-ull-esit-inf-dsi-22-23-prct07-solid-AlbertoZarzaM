

/**
 * Clase myList, que representa una lista de elementos de tipo T.
 * @param list Lista de elementos de tipo T.
 * @method length: Retorna la longitud de la lista.
 * @method get: Retorna el elemento en la posición index.
 * @method push: Agrega un elemento al final de la lista.
 * @method append: Agrega todos los elementos de la lista list al final de la lista.
 * @method concatenate: Combina todos los elementos de las listas en una única lista.
 * @method map: Aplica la función f a cada elemento de la lista.
 * @method filter: Retorna una lista con los elementos que cumplen con la condición de la función f.
 * @method reduce: Reduce cada elemento al acumulador utilizando la función f.
 * @method reverse: Retorna una lista con los elementos de la lista original en orden inverso.
 * @method forEach: Aplica la función f a cada elemento de la lista.
 * 
 * 
 */
export class myList<T>{

  constructor(private list: T[]){}

  /**
   * 
   * @returns Retorna la longitud de la lista.
   * 
   */
  public length(): number{
    let length = 0;
    while(this.list[length] !== undefined){
      length++;
    }
    return length;
  }

  /**
   * 
   * @param index Posición del elemento a retornar.
   * 
   * @returns Retorna el elemento en la posición index.
   */
  public get(index: number): T{

    
    return this.list[index];
  }

  /**
   * 
   * @param item Elemento a agregar al final de la lista.
   */
  public push(item: T): void{
    this.list[this.length()] = item;
  }

  /**
   * 
   * @param list Lista de elementos a agregar al final de la lista.
   */
  public append(list: myList<T>): void{
    for(let i = 0; i < list.length(); i++){
      this.push(list.get(i));
    }
  }
  
  /**
   * 
   * @param lists Lista de listas de elementos a combinar en una única lista.
   * 
   * @returns Retorna una lista con todos los elementos de las listas.
   */
  public concatenate (...lists: myList<T>[]): myList<T>{

    const newList: myList<T> = new myList(this.list);
    let i = 0;
    while (lists[i] !== undefined){
      newList.append(lists[i]);
      i++;
    }
    return newList;   
  }

  /**
   * 
   * @param f Función a aplicar a cada elemento de la lista.
   * @returns  Retorna una lista con los elementos resultantes de aplicar la función f a cada elemento de la lista.
   */
  public map(f: (item: T) => T): myList<T>{
    const newList: myList<T> = new myList([]);
    for(let i = 0; i < this.length(); i++){
      newList.push(f(this.get(i)));
    }
    return newList;
  }


  /**
   * 
   * @param f  Función que determina si un elemento cumple con una condición.
   * @returns   Retorna una lista con los elementos que cumplen con la condición de la función f.
   */
  public filter(f: (item: T) => boolean): myList<T>{

    const newList: myList<T> = new myList([]);
    for(let i = 0; i < this.length(); i++){
      if(f(this.get(i))){
        newList.push(this.get(i));
      }
    }
    return newList;
  }

  /**
   * 
   * @param f  Función que reduce cada elemento al acumulador.
   * @param acum  Acumulador.
   * @returns  Retorna el acumulador con el resultado de aplicar la función f a cada elemento de la lista.
   */
  public reduce(f: (acum: T, item: T) => T, acum: T): T{
    for(let i = 0; i < this.length(); i++){
      acum = f(acum, this.get(i));
    }
    return acum;
  }

  /**
   * 
   * @returns Retorna una lista con los elementos de la lista original en orden inverso.
   * 
   */
  public reverse(): myList<T>{
    const newList: myList<T> = new myList([]);
    for(let i = this.length() - 1; i >= 0; i--){
      newList.push(this.get(i));
    }
    return newList;
  }

  /**
   * 
   * @param f   Función a aplicar a cada elemento de la lista.
   */
  public forEach(f: (item: T) => void): void{
    for(let i = 0; i < this.length(); i++){
      f(this.get(i));
    }
  }


}

