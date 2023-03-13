


/**
 * Clase que genera números aleatorios
 * 
 * 
 */
export class RandomNumber {
    
    
  private static _randomNumberinstance: RandomNumber;

  /**
   * 
   * @returns retorna la instacia de la clase RandomNumber
   */
  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber._randomNumberinstance) {
      RandomNumber._randomNumberinstance = new RandomNumber();
    }
    return RandomNumber._randomNumberinstance;
  }
    
  /**
   * 
   * @returns Un número aleatorio en punto flotante generado en el rango [0, 1).
   */
  public static randomNumber0_1(): number {

    return Math.random();
       
  }

  /**
   * 
   * @param min  valor mínimo
   * @param max  valor máximo
   * @returns  Un número aleatorio en punto flotante generado en el rango [min, max].
   */
  public static randomNumberbetweenN_M(min: number, max: number): number | undefined {
    if ( min > max) {
      return undefined;
    }
    return Math.random() * (max - min) + min;
  }

  
  /**
   * /Un numero aleatorio entero generado en el rango [min, max].
   * @param min valor mínimo
   * @param max  valor máximo
   * @returns  Un número aleatorio entero generado en el rango [min, max].
   */
  public static randomNumberIntbetweenN_M(min: number, max: number): number | undefined{
    //comprobar que sean enteros los limites
    if (min % 1 !== 0 || max % 1 !== 0 || min > max) {
      return undefined;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}