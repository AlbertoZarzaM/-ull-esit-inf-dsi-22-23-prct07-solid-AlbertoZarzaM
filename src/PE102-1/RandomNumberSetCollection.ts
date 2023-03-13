import { RandomNumber } from "./RandomNumber";

/**
 * RandomNumberSetCollection
 * 
 * This class is used to create a set of random numbers
 * 
 * 
 */
export class RandomNumberSetCollection  {

  private _randomNumberSetCollection: Set<number>;

    /**
     * 
     * constructor for RandomNumberSetCollection
     * 
     * This constructor is used to create a set of random numbers
     * 
     * 
     * @param numberofrandom number of random numbers to be generated
     * 
     * 
     */
  constructor(numberofrandom: number) {
    this._randomNumberSetCollection = new Set<number>();
    for (let i = 0; i < numberofrandom; i++) {
      this._randomNumberSetCollection.add(RandomNumber.randomNumberIntbetweenN_M(1, 100) as number);
    }

  }

  /**
   * 
   * randomNumberSetCollection
   * 
   * This method is used to get the set of random numbers
   */
  
  [Symbol.iterator](): Iterator<number> {
    return this._randomNumberSetCollection.values();
  }
  /**
   * 
   * @param number  number to be added to the set
   * @returns  boolean
   */
  public addRandomNumber(number: number): boolean {
    this._randomNumberSetCollection.add(number);
    return true;
  }

  //metodo para buscar un numero en el set
  public searchNumber(number: number): boolean {
    return this._randomNumberSetCollection.has(number);
  }





}



