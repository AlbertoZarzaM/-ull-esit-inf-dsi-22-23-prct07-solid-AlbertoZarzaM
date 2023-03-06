


import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase Complex para representar numeros complejos
 * 
 * @export
 * @class Complex
 * @implements {Arithmeticable<Complex>}
 * 
 * @method add Suma
 * @method subtract Resta
 * @method multiply Multiplicacion
 * @method divide Division
 */
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