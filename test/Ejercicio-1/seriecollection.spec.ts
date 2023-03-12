import 'mocha';
import {expect} from 'chai';

import {Serie} from '../../src/Ejercicio-1/Serie';
import {SeriesCollection} from '../../src/Ejercicio-1/SeriesCollection';



const SerieCollection = new SeriesCollection([], "Elite ", 10);

      const serie = new Serie(1, "Elite 1", 2018, "Netflix", 125 );
      const serie2 = new Serie(2, "Elite 2", 2018, "Netflix", 125 );
      const serie3 = new Serie(3, "Elite 3", 2018, "Netflix", 125 );
      SerieCollection.addStreamable(serie);
      SerieCollection.addStreamable(serie2);
      SerieCollection.addStreamable(serie3);

describe('SerieCollection class', () => {

  it('should be an instance of SerieCollection', () => {
    expect(new SeriesCollection([], " ", 10)).to.be.an.instanceOf(SeriesCollection);
  });

  it('should have a title', () => {
    const SerieCollection = new SeriesCollection([], "Elite", 10);
    expect(SerieCollection.getTitle()).to.be.equal("Elite");

  });

  it ('shouldnt add serie', () => {

    expect(SerieCollection.addStreamable(serie)).to.be.equal(undefined);

  });

  it('should have a id', () => {

    const SerieCollection = new SeriesCollection([], "Elite ", 10);
    expect(SerieCollection.getID()).to.be.equal(10);

  });

  it('should have an searchID', () => {

    expect(SerieCollection.searchById(1)).to.be.equal(serie);
  
  });

  it ('should have an searchID', () => {
    expect(SerieCollection.searchById(4)).to.be.equal(undefined);
  });

  it('should have an searchTitle', () => {
        
    expect(SerieCollection.searchByTitle("Elite 1")).to.be.equal(serie);
    
  });

  it('should have an searchTitle', () => {

    expect(SerieCollection.searchByTitle("Elite 4")).to.be.equal(undefined);

  });

  it('should have an searchYear', () => {
          
    expect(SerieCollection.searchByYear(2018)).to.be.equal(serie);
      
  });

  it('should have an searchYear', () => {

    expect(SerieCollection.searchByYear(2019)).to.be.equal(undefined);

  });

      
});







