import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase para representar numeros racionales
 * 
 * @export
 * @class Rational
 * @implements {Arithmeticable<Rational>}
 * 
 * @method add Suma
 * @method subtract Resta
 * @method multiply Multiplicacion
 * @method divide Division
 * 
 * 
 */
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