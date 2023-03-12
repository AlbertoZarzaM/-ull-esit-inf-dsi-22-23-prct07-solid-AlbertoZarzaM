import 'mocha';
import {expect} from 'chai';
import {Artista} from '../../src/Ejercicio-3/Artista';
import {Disco} from '../../src/Ejercicio-3/Disco';
import {Cancion} from '../../src/Ejercicio-3/Cancion';
import {BibliotecaMusical} from '../../src/Ejercicio-3/Biblioteca';
import {Discografia} from '../../src/Ejercicio-3/Discografia';
import {Singles} from '../../src/Ejercicio-3/Singles';



const cancion1 = new Cancion('Come Together', 3.35, ['Rock', 'Pop'], false, 100000000);
const cancion2 = new Cancion('Something', 3.05, ['Rock', 'Pop'], false, 100000000);
const cancion3 = new Cancion('Maxwell\'s Silver Hammer', 3.35, ['Rock', 'Pop'], false, 100000000);
const cancion4 = new Cancion('Oh! Darling', 3.35, ['Rock', 'Pop'], false, 100000000);


const disco1 = new Disco('Abbey Road', 1969, [cancion1, cancion2, cancion3]);
const disco2 = new Disco('Let It Be', 1970, [cancion1, cancion2, cancion4]);
const disco3 = new Disco('Sgt. Pepper\'s Lonely Hearts Club Band', 1967, []);

const single1 = new Singles('Come Together', 1969, [cancion1]);

const discografia1: Discografia<Disco> = new Discografia('pepedisco', [disco1, disco2, disco3]);
const discografia2: Discografia<Singles> = new Discografia('pepesingles', [single1]);


const artista1 = new Artista('The Beatles', 100000000, discografia1);
const artista2 = new Artista('The Rolling Stones', 100000000, discografia2);
const artista3 = new Artista('The Doors', 100000000, discografia1);
const artista4 = new Artista('The Who', 100000000, discografia2);

describe("Puebas de la biblioteca musical", () => {
  it ("Comprobar que se añade un artista", () => {
    const biblioteca = new BibliotecaMusical();
    expect(biblioteca.agregarArtista(artista1)).to.be.equal(true);
  });

  it ("Comprobar que se puede buscar un artista", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    expect(biblioteca.buscarArtista('The Beatles')).to.be.equal('The Beatles');
  });

  it ("Comprobar que no se puede buscar un artista", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    expect(biblioteca.buscarArtista('Alberto')).to.be.equal('No se ha encontrado el artista');
  });

  it ("Comprobar que se puede buscar un disco", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);
    expect(biblioteca.buscarDisco('Abbey Road')).to.be.equal('Abbey Road');
  } );  



  it ("Comprobar que se puede buscar una canción", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);


    expect(biblioteca.buscarCancion("Something")).to.be.equal("Something");
    expect(biblioteca.buscarCancion("Alberto")).to.be.equal("No se ha encontrado la cancion");
  }
  );  

  it ("Comprobar que se mostar la biblioteca", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);
    expect(biblioteca.mostrarBiblioteca()).to.be.equal(true);

  });



  it ("Comprobar que se puede calcular el número de canciones de un disco", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);
    expect(biblioteca.calcularNumeroCancionesDisco("Abbey Road")).to.be.equal(3);
  });

  it ("Comprobar que se puede calcular la duracion de un disco", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);
    expect(biblioteca.calcularDuracionDisco("Abbey Road")).to.be.equal(9.75);
  }
  );

  it ("Comprobar que se puede calcular el numero de reproducciones de un disco", () => {
    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);
    expect(biblioteca.calcularNumeroReproduccionesDisco("Abbey Road")).to.be.equal(300000000);
  }
  );

  it ("Comprobar que no se puede encontar", () => {

    const biblioteca = new BibliotecaMusical();
    biblioteca.agregarArtista(artista1);
    biblioteca.agregarArtista(artista2);
    biblioteca.agregarArtista(artista3);
    biblioteca.agregarArtista(artista4);
    expect(biblioteca.buscarDisco("Alberto")).to.be.equal("No se ha encontrado el disco");
    expect(biblioteca.calcularNumeroCancionesDisco("Alberto")).to.be.equal('No se ha encontrado el disco o esta vacio');
    expect(biblioteca.calcularDuracionDisco("Alberto")).to.be.equal('No se ha encontrado el disco o esta vacio');
    expect(biblioteca.calcularNumeroReproduccionesDisco("Alberto")).to.be.equal('No se ha encontrado el disco o esta vacio');
  }
  );


});
