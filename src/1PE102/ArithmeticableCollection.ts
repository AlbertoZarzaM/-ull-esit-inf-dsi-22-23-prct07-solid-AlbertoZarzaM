
import { Arithmeticable } from './Arithmeticable';

/**
 * Clase generica para colecciones de operaciones aritmeticas
 * 
 * @export
 * @class ArithmeticableCollection  
 * @template T
 * 
 * @method addArithmeticable Añade una operacion aritmetica a la coleccion
 * @method getArithmeticable Devuelve la operacion aritmetica en la posicion indicada
 * @method getNumberOfArithmeticables Devuelve el numero de operaciones aritmeticas en la coleccion
 * 
 * 
 */
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

