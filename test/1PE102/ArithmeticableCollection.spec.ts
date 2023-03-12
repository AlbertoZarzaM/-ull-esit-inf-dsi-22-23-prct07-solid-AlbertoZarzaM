
import 'mocha';
import {expect} from 'chai';
import {ArithmeticableCollection} from '../../src/1PE102/ArithmeticableCollection';
import {Complex} from '../../src/1PE102/Complex';


describe('ArithmeticableCollection test', () => {

  it('should add an arithmeticable Complex', () => {

    const collection = new ArithmeticableCollection<Complex>();

    const op1 = new Complex(1, 2);
    const op2 = new Complex(3, 4);

    expect(collection.addArithmeticable(op1)).to.be.equal(op1);
    expect(collection.addArithmeticable(op2)).to.be.equal(op2);


  });

  it ('should get an arithmeticable Complex', () => {

    const collection = new ArithmeticableCollection<Complex>();

    const op1 = new Complex(1, 2);
    const op2 = new Complex(3, 4);

    collection.addArithmeticable(op1);
    collection.addArithmeticable(op2);

    expect(collection.getArithmeticable(0)).to.be.equal(op1);
    expect(collection.getArithmeticable(1)).to.be.equal(op2);

  });

  it ('should not get an arithmeticable Complex', () => {
      
      const collection = new ArithmeticableCollection<Complex>();
  
      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);
  
      collection.addArithmeticable(op1);
      collection.addArithmeticable(op2);
  
      expect(collection.getArithmeticable(2)).to.be.equal(undefined);
  
    });

  it ('should get the number of arithmeticables', () => {
        
        const collection = new ArithmeticableCollection<Complex>();
    
        const op1 = new Complex(1, 2);
        const op2 = new Complex(3, 4);
    
        collection.addArithmeticable(op1);
        collection.addArithmeticable(op2);
    
        expect(collection.getNumberOfArithmeticables()).to.be.equal(2);
    
  });
});