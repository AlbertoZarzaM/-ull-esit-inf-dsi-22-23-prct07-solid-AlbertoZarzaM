import 'mocha';
import {expect} from 'chai';
import { Rational } from '../../src/1PE102/Rational';

describe('Rational test', () => {

  it('should add two rational numbers', () => {

    const op1 = new Rational(1, 2);
    const op2 = new Rational(3, 4);

    expect(op1.add(op2)).to.be.deep.equal(new Rational(10, 8));

  });

  it('should subtract two rational numbers', () => {
      
      const op1 = new Rational(1, 2);
      const op2 = new Rational(3, 4);
  
      expect(op1.subtract(op2)).to.be.deep.equal(new Rational(-2, 8));
  
    });

  it('should multiply two rational numbers', () => {

      const op1 = new Rational(1, 2);
      const op2 = new Rational(3, 4);

      expect(op1.multiply(op2)).to.be.deep.equal(new Rational(3, 8));

    });

  it('should divide two rational numbers', () => {
      
        const op1 = new Rational(1, 2);
        const op2 = new Rational(3, 4);
  
        expect(op1.divide(op2)).to.be.deep.equal(new Rational(4, 6));
  
      });  

});
