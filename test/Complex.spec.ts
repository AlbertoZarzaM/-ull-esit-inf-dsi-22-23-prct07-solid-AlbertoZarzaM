import 'mocha';
import {expect} from 'chai';
import { Complex } from '../src/1PE102/Complex';


describe('Complex test', () => {

  it('should add two complex numbers', () => {
      
      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);
  
      expect(op1.add(op2)).to.be.deep.equal(new Complex(4, 6));
  
    });

  it('should subtract two complex numbers', () => {
          
      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);
      
      expect(op1.subtract(op2)).to.be.deep.equal(new Complex(-2, -2));
      
  });

  it('should multiply two complex numbers', () => {

      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);

      expect(op1.multiply(op2)).to.be.deep.equal(new Complex(-5, 10));

  });

  it('should divide two complex numbers', () => {

      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);

      expect(op1.divide(op2)).to.be.deep.equal(new Complex(0.44, 0.08));

  });

});