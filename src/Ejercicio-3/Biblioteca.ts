import { Artista } from "./Artista";
import { Disco } from "./Disco";
import { Singles } from "./Singles";
import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";



/* 


La biblioteca musical deberá permitir:
Almacenar la información de diferentes artistas, su discografía y las canciones pertenecientes a cada disco o álbum.
Mostrar por la consola la información de la biblioteca en formato tabla (console.table).
Permitir llevar a cabo búsquedas de artistas, discos y canciones y mostrar los resultados de la búsqueda en formato de tabla.
Permitir calcular el número de canciones incluidas en un disco concreto.
Permitir calcular la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
Permitir calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y cada una de las canciones incluidas en el mismo.

*/

/**
 * Clase BibliotecaMusical
 * 
 * @param artistas Lista de artistas
 *  
 * @method agregarArtista Añade un artista a la biblioteca
 * @method buscarArtista Busca un artista en la biblioteca
 * @method mostrarBiblioteca Muestra la biblioteca en formato tabla
 * @method buscarDisco Busca un disco en la biblioteca
 * @method buscarCancion Busca una cancion en la biblioteca
 * @method calcularNumeroCancionesDisco Calcula el numero de canciones de un disco
 * @method calcularDuracionDisco Calcula la duracion de un disco
 * @method calcularNumeroReproduccionesDisco Calcula el numero de reproducciones de un disco
 * 
 * 
 */
export class BibliotecaMusical {
  artistas: Artista[];

  constructor() {
    this.artistas = [];
  }

  /**
   * Añade un artista a la biblioteca
   * @param artista Artista a añadir
   * @returns true si se ha añadido correctamente, false si no
   * 
   *  
   */
  agregarArtista(artista: Artista): boolean{
    this.artistas.push(artista);
    return true;
  }

  /**
   * 
   * @param nombre Nombre del artista a buscar
   * 
   * @returns Nombre del artista si se ha encontrado, 'No se ha encontrado el artista' si no
   */
  buscarArtista(nombre: string): string {
    let artistasEncontrados = false;

    let artistaaux: Artista = new Artista('', 100000000, new Discografia <Disco | Singles>("",[]) );
    this.artistas.forEach(artista => {
      if (artista.nombre === nombre) {
        
        artistasEncontrados = true;
        artistaaux = artista;

        
      }
    }
    )

    if (artistasEncontrados === false) {
      return 'No se ha encontrado el artista';     
    }
    else {
      console.table(artistaaux);
      return nombre;
      
    }

  }

  /** 
   * Muestra la biblioteca en formato tabla
   * 
   */
  mostrarBiblioteca() {
    console.table(this.artistas);
    return true;
  }

  /**
   * 
   * @param nombre Nombre del disco a buscar
   * @returns nombre del disco si se ha encontrado, 'No se ha encontrado el disco' si no
   */
  buscarDisco(nombre: string): string  {
    //buscar disco en la discografia de cada artista y imprimirlo el objeto disco en formato tabla
    let discosEncontrados = false;
    let discoaux: Disco | Singles = new Disco(' ', 0, [] ) ;  

    this.artistas.forEach(artista => {
      artista.discografia.discografia.forEach(disco => {
        if (disco.nombre === nombre) {
          discoaux = disco;
          discosEncontrados = true;
        }
      })
    }
    )

    if (discosEncontrados === false) {
      return 'No se ha encontrado el disco';     
    }
    else {
      console.table(discoaux);
      return nombre;
    }

  }

  /**
   * 
   * @param nombre Nombre de la cancion a buscar
   * @returns nombre de la cancion si se ha encontrado, 'No se ha encontrado la cancion' si no
   */
  buscarCancion(nombre: string) : string {
    let cancionEncontrada = false;
    let cancionaux: Cancion = new Cancion(' ', 0, [], false, 0);


    this.artistas.forEach(artista => {
      artista.discografia.discografia.forEach(disco => {
        disco.getCanciones().find(cancion => {
          if(cancion.nombre === nombre) {
            cancionaux = cancion;
            cancionEncontrada = true;
            return true;
          } else {
            return false;
          }
        })
      })
    })
    
    if (cancionEncontrada) {
      console.table(cancionaux);
      return nombre;
      
    }
    else {
      return 'No se ha encontrado la cancion';
    }
  }


  /**
   * 
   * @param nombre Nombre del disco
   * @returns numero de canciones del disco
   */
  calcularNumeroCancionesDisco(nombre: string) {
    
    let numeroCanciones = 0;
    this.artistas.forEach(artista => {
      artista.discografia.discografia.forEach(disco => {
        if (disco.nombre === nombre) {
          numeroCanciones = disco.getCanciones().length;
        }
      })
    }
    )

    if (numeroCanciones === 0) {
      return 'No se ha encontrado el disco o esta vacio';     
    }
    else {
      return numeroCanciones;
    }




  }

  /**
   * 
   * @param nombre Nombre del disco
   * @returns duracion del disco
   */
  calcularDuracionDisco(nombre: string) {

    let duracionDisco = 0;
    this.artistas.forEach(artista => {
      artista.discografia.discografia.forEach(disco => {
        if (disco.nombre === nombre) {
          duracionDisco = disco.getCanciones().reduce((acumulador, cancion) => acumulador + cancion.duracion, 0);
        }
      })
    }
    )

    if (duracionDisco === 0) {
      return 'No se ha encontrado el disco o esta vacio';     
    }
    else {
      return duracionDisco;
    } 
  }
    

  /**
   * 
   * @param nombre Nombre del disco
   * @returns numero de reproducciones del disco
   */

  calcularNumeroReproduccionesDisco(nombre: string) {
    let numeroReproduccionesDisco = 0;
    this.artistas.forEach(artista => {
      artista.discografia.discografia.forEach(disco => {
        if (disco.nombre === nombre) {
          numeroReproduccionesDisco = disco.getCanciones().reduce((acumulador, cancion) => acumulador + cancion.reproducciones, 0);
        }
      })
    }
    )

    if (numeroReproduccionesDisco === 0) {
      return 'No se ha encontrado el disco o esta vacio';     
    }
    else {
      return numeroReproduccionesDisco;
    }
  }
};