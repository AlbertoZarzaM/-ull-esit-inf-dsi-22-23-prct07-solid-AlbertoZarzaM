import 'mocha';
import {expect} from 'chai';
import { Serie } from '../../src/Ejercicio-1/Serie';


describe('SerieCollection class', () => {

  it('should be an instance of Serie', () => {
    expect(new Serie(1, "Elites", 2018, "Netflix", 125 )).to.be.an.instanceOf(Serie);
  });

  it('should have a title', () => {
    const serie = new Serie(1, "Elites", 2018, "Netflix", 125 );
    expect(serie.getTitle()).to.be.equal("Elites");

  });

  it('should have a year', () => {

    const serie = new Serie(1, "Elites", 2018, "Netflix", 125 );
    expect(serie.getYear()).to.be.equal(2018);
  
  });

  it('should have an id', () => {
    const serie = new Serie(1, "Elites", 2018, "Netflix", 125 );
    expect(serie.getId()).to.be.equal(1);
  
  }); 

  it('should have an episodes', () => {

    const serie = new Serie(1, "Elites", 2018, "Netflix", 125 );
    expect(serie.getEpisodes()).to.be.equal(125);
  
  });


  it('should have an company', () => {

    const serie = new Serie(1, "Elites", 2018, "Netflix", 125 );
    expect(serie.getCompany()).to.be.equal("Netflix");
    
  });

});