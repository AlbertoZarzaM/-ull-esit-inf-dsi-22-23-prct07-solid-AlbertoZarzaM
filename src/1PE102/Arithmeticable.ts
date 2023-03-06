

/**
 * Interfaz generica para operaciones aritmeticas
 * 
 * @export
 * @interface Arithmeticable
 * @template T
 * @param {T} op
 * @returns {T}
 * 
 * @method add Suma
 * @method subtract Resta
 * @method multiply Multiplicacion
 * @method divide Division
 * 
 * 
 */
export interface Arithmeticable<T> {
  add(op: T): T;
  subtract(op: T): T;
  multiply(op: T): T;
  divide(op: T): T;
}
