import 'mocha';
import {expect} from 'chai';

import { Documental } from '../../src/Ejercicio-1/Documental';


describe('Documental', () => {

    it('should create an instance', () => {

        expect(new Documental(1, "National Geographic", 2001, 200)).to.be.an.instanceOf(Documental);

    });

    it ('should have a duration', () => {

        const documental = new Documental(1, "National Geographic", 2001, 200);

        expect(documental.getDuration()).to.be.equal(200);

    });

    it('should have a title', () => {

        const documental = new Documental(1, "National Geographic", 2001, 200);

        expect(documental.getTitle()).to.be.equal("National Geographic");

    });

    it('should have a year', () => {
        
        const documental = new Documental(1, "National Geographic", 2001, 200);

        expect(documental.getYear()).to.be.equal(2001);

    });

    it('should have an id', () => {
        
        const documental = new Documental(1, "National Geographic", 2001, 200);

        expect(documental.getId()).to.be.equal(1);

    
    });

});