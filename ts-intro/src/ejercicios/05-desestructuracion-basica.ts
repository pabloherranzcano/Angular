/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
	volumen: number;
	segundo: number;
	cancion: string;
	detalles: Detalles;
}

interface Detalles {
	autor: string;
	anio: number;
}

const reproductor: Reproductor = {
	volumen: 90,
	segundo: 36,
	cancion: 'Mess',
	detalles: {
		autor: 'Ed Sheeran',
		anio: 2015
	}
}

// console.log('El volumen actual es de: ', reproductor.volumen);
// console.log('El segundo actual es de: ', reproductor.segundo);
// console.log('La canción actual es de: ', reproductor.cancion);
// console.log('El autor es : ', reproductor.detalles.autor);

const autor = 'Fulano';

const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor; //Después de los : se le da nombre a la variable
// const { autor } = detalles;


// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es de: ', cancion);
// console.log('El autor es : ', autorDetalle);



// Para desestructurar un objeto se hace con llaves {}, mientras que para desestructurar un array, se hace con corchetes []


const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];

// console.log('Personaje 1; ', dbz[0]);
// console.log('Personaje 2; ', dbz[1]);
// console.log('Personaje 3; ', dbz[2]);

// const [ p1, p2, p3 ] = dbz;
const [ , , p3 ] = dbz; // Se escribe la coma por cada posición que no se quiere desestructurar, hasta llegar a la a posición deseada

// console.log('Personaje 1; ', p1);
// console.log('Personaje 2; ', p2);
console.log('Personaje 3; ', p3);