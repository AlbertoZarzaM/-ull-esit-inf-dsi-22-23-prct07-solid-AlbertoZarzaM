import 'mocha';
import {expect} from 'chai';
import {myList} from '../../src/Ejercicio-2/myList';


describe('myList test', () => {

  it ('should get the length of the list', () => {
    const list = new myList([1, 2, 3, 4, 5]);
    expect(list.length()).to.be.equal(5);
  });

  it ('should get the element in the index', () => {

    const list = new myList([1, 2, 3, 4, 5]);
    expect(list.get(0)).to.be.equal(1);
    expect(list.get(1)).to.be.equal(2);
    expect(list.get(2)).to.be.equal(3);
    expect(list.get(3)).to.be.equal(4);
    expect(list.get(4)).to.be.equal(5);
  });

  it ('should push an element to the list', () => {
      
      const list = new myList([1, 2, 3, 4, 5]);
      list.push(6);
      expect(list.get(5)).to.be.equal(6);
    });

  it ('should append a list to the list', () => {

    const list = new myList([1, 2, 3, 4, 5]);
    const list2 = new myList([6, 7, 8, 9, 10]);
    list.append(list2);
    expect(list.get(5)).to.be.equal(6);
    expect(list.get(6)).to.be.equal(7);
    expect(list.get(7)).to.be.equal(8);
    expect(list.get(8)).to.be.equal(9);
    expect(list.get(9)).to.be.equal(10);
  });

  it ('should concatenate two lists', () => {
          
      const list = new myList([1, 2, 3, 4, 5]);
      const list2 = new myList([6, 7, 8, 9, 10]);
      const list3 = list.concatenate(list2);
      expect(list3).to.be.deep.equal(new myList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  });

  it ('should map a function to the list', () => {

    const list = new myList([1, 2, 3, 4, 5]);
    const list2 = list.map(x => x * 2);
    expect(list2.get(0)).to.be.equal(2);
    expect(list2.get(1)).to.be.equal(4);
    expect(list2.get(2)).to.be.equal(6);
    expect(list2.get(3)).to.be.equal(8);
    expect(list2.get(4)).to.be.equal(10);
  });

  it ('should filter a function to the list', () => {
      
      const list = new myList([1, 2, 3, 4, 5]);
      const list2 = list.filter(x => x % 2 === 0);
      expect(list2.get(0)).to.be.equal(2);
      expect(list2.get(1)).to.be.equal(4);
    });

  it ('should reduce the list', () => {

    const list = new myList<number>([1, 2, 3, 4, 5]);
    const result = list.reduce((acum, x) => acum + x, 0);
    expect(result).to.be.equal(15);
  });

  it ('should reverse the list', () => {

    const list = new myList([1, 2, 3, 4, 5]);
    const list2 = list.reverse();
    expect(list2.get(0)).to.be.equal(5);
    expect(list2.get(1)).to.be.equal(4);
    expect(list2.get(2)).to.be.equal(3);
    expect(list2.get(3)).to.be.equal(2);
    expect(list2.get(4)).to.be.equal(1);
  });

  it ('should forEach the list', () => {

    const list = new myList([1, 2, 3, 4, 5]);
    let result = 0;
    list.forEach(x => result += x);
    expect(result).to.be.equal(15);
  });

});


