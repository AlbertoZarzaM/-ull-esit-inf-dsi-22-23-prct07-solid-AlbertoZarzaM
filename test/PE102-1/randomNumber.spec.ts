


import 'mocha';
import {expect} from 'chai';
import { RandomNumber } from '../../src/PE102-1/RandomNumber';



describe('RandomNumber test', () => {

  it ('should get a random number instance', () => {

    const randomNumber = RandomNumber.getRandomNumber();

    expect(randomNumber).to.be.an.instanceOf(RandomNumber);

  });

  it('should get a random number between 0 and 1', () => {

   // const randomNumber = RandomNumber.getRandomNumber();

    expect(RandomNumber.randomNumber0_1()).to.be.greaterThanOrEqual(0);
    expect(RandomNumber.randomNumber0_1()).to.be.lessThanOrEqual(1);
    expect(RandomNumber.randomNumber0_1()).to.be.within(0, 1);

  });

  it('should get a random number between N and M', () => {

    //const randomNumber = RandomNumber.getRandomNumber();

    expect(RandomNumber.randomNumberbetweenN_M(1, 2)).to.be.greaterThanOrEqual(1);
    expect(RandomNumber.randomNumberbetweenN_M(1, 2)).to.be.lessThanOrEqual(2);
    expect(RandomNumber.randomNumberbetweenN_M(1, 2)).to.be.within(1, 2);

  });

  it('should get a random number between N and M', () => {

   // const randomNumber = RandomNumber.getRandomNumber();

    expect(RandomNumber.randomNumberbetweenN_M(3, 2)).to.be.undefined;

  });

  it('should get a random integer number between N and M', () => {

    // const randomNumber = RandomNumber.getRandomNumber();
    expect(RandomNumber.randomNumberIntbetweenN_M(1, 2)).to.be.greaterThanOrEqual(1);
    expect(RandomNumber.randomNumberIntbetweenN_M(1, 2)).to.be.lessThanOrEqual(2);
    expect(RandomNumber.randomNumberIntbetweenN_M(1, 2)).to.be.within(1, 2);

  });

  it ('should get a random integer number between N and M', () => {
     
    // const randomNumber = RandomNumber.getRandomNumber();
    expect(RandomNumber.randomNumberIntbetweenN_M(3, 2)).to.be.undefined;

  });

  it('should get a random integer number between N and M', () => {
      
     // const randomNumber = RandomNumber.getRandomNumber();
      expect(RandomNumber.randomNumberIntbetweenN_M(1.5, 2)).to.be.undefined;
  
   });






});