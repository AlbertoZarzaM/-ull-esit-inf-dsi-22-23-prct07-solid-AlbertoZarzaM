import 'mocha';
import {expect} from 'chai';

import { DocumentalesCollection } from '../../src/Ejercicio-1/DocumentalCollection';
import { Documental } from '../../src/Ejercicio-1/Documental';

describe('DocumentalesCollection', () => {

    it('should create an instance', () => {

        expect(new DocumentalesCollection([], " ", 0)).to.be.an.instanceOf(DocumentalesCollection);

    });

    it('should have a title', () => {
        
          const documentalescollection = new DocumentalesCollection([], " ", 0);
  
          expect(documentalescollection.getTitle()).to.be.equal(" ");
  
      });

      it('should have a id', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        expect(documentalescollection.getID()).to.be.equal(0);

    });

    it('should have a documentales', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        const documental = new Documental(1, " national geographic ", 2001, 200);
        documentalescollection.addStreamable(documental);
        documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2001, 200));

        expect(documentalescollection.searchById(1)).to.be.equal(documental);

    });

    it ('should search by year return undefined', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        documentalescollection.addStreamable(new Documental(1, " national geographic ", 2001, 200));
        documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2001, 200));

        expect(documentalescollection.searchByYear(2002)).to.be.equal(undefined);

    });

    it ('should search by title return undefined', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        documentalescollection.addStreamable(new Documental(1, " national geographic ", 2001, 200));
        documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2001, 200));

        expect(documentalescollection.searchByTitle("zarza ")).to.be.equal(undefined);
        

    });

    it('should have a documentales', () => {
        
          const documentalescollection = new DocumentalesCollection([], " ", 0);
  
          documentalescollection.addStreamable(new Documental(1, " national geographic ", 2001, 200));
          documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2001, 200));
  
          expect(documentalescollection.searchById(3)).to.be.equal(undefined);
  


    });

    it('should have a documentales', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        const documental = new Documental(1, " national geographic ", 2001, 200);
        documentalescollection.addStreamable(documental);documentalescollection.addStreamable(new Documental(1, " national geographic ", 2001, 200));
        documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2001, 200));

        expect(documentalescollection.searchByTitle(" national geographic ")).to.be.equal(documental);

    });

    it('should have a documentales', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        documentalescollection.addStreamable(new Documental(1, " national geographic ", 2001, 200));
        const documental = new Documental(2, " planeta calleja ", 2001, 200);
        documentalescollection.addStreamable(documental);

        expect(documentalescollection.searchByTitle(" planeta calleja ")).to.be.equal(documental);

    });

    it('should have a documentales', () => {
        
          const documentalescollection = new DocumentalesCollection([], " ", 0);

          const documental = new Documental(1, " national geographic ", 2001, 200);
          documentalescollection.addStreamable(documental);
          documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2010, 200));
  
          expect(documentalescollection.searchByYear(2001)).to.be.equal(documental);
  
      });

      it('should have a documentales', () => {

        const documentalescollection = new DocumentalesCollection([], " ", 0);

        const documental = new Documental(1, " national geographic ", 2001, 200);
        documentalescollection.addStreamable(documental);
        documentalescollection.addStreamable(new Documental(2, " planeta calleja ", 2001, 200));

        expect(documentalescollection.searchByYear(2001)).to.be.equal(documental);

      });


    

});