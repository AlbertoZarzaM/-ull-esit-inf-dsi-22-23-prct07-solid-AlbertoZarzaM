
import 'mocha';
import {expect} from 'chai';
import { RandomNumberSetCollection } from '../../src/PE102-1/RandomNumberSetCollection';
import { RandomNumber } from '../../src/PE102-1/RandomNumber';


describe('RandomNumberSetCollection test', () => {

  it ('should get a random number set collection instance', () => {
      
      const randomNumberSetCollection = new RandomNumberSetCollection(5);
  
      expect(randomNumberSetCollection).to.be.an.instanceOf(RandomNumberSetCollection);
  
    }
  );

  

    it ('should use the iterator', () => {

      const randomNumberSetCollection = new RandomNumberSetCollection(5);

      for (const number of randomNumberSetCollection) {

        expect(number).to.be.greaterThanOrEqual(0);

        expect(number).to.be.lessThanOrEqual(100);

        expect(number).to.be.within(0, 100);

      }

    });

    it ('should be iterable', () => {

      const iterator = new RandomNumberSetCollection(5)[Symbol.iterator]();

      expect(iterator.next()).to.be.an('object');

    });

    it ('should add a random number to the set', () => {

      const number = RandomNumber.randomNumberIntbetweenN_M(1, 100);

      const randomNumberSetCollection = new RandomNumberSetCollection(5);

      

      expect(randomNumberSetCollection.addRandomNumber(number as number)).to.be.equal(true);

    });

    it ('should search a number in the set', () => {

      const number = RandomNumber.randomNumberIntbetweenN_M(1, 100);

      const randomNumberSetCollection = new RandomNumberSetCollection(5);

      randomNumberSetCollection.addRandomNumber(number as number);

      expect(randomNumberSetCollection.searchNumber(number as number)).to.be.equal(true);

    });

    it ('should not search a number in the set', () => {

      const number = RandomNumber.randomNumberIntbetweenN_M(1, 100);

      const randomNumberSetCollection = new RandomNumberSetCollection(5);

      randomNumberSetCollection.addRandomNumber(number as number);

      expect(randomNumberSetCollection.searchNumber(0)).to.be.equal(false);

    });


});

