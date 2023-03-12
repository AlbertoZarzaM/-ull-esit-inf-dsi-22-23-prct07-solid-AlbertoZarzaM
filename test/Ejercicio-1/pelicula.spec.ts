import 'mocha';
import {expect} from 'chai';
import { Pelicula } from '../../src/Ejercicio-1/Pelicula';


describe('Pelicula', () => {
  
    it('should create an instance', () => {
  
      expect(new Pelicula(1, "Fast and Furious", 2001)).to.be.an.instanceOf(Pelicula);
  
    });

    it('should have a title', () => {

        const pelicula = new Pelicula(1, "Fast and Furious", 2001);

        expect(pelicula.getTitle()).to.be.equal("Fast and Furious");

    });

    it('should have a year', () => {
        
          const pelicula = new Pelicula(1, "Fast and Furious", 2001);
  
          expect(pelicula.getYear()).to.be.equal(2001);
  
      });

      it('should have an id', () => {
          
          const pelicula = new Pelicula(1, "Fast and Furious", 2001);
  
          expect(pelicula.getId()).to.be.equal(1);

      
      });
  
  });

