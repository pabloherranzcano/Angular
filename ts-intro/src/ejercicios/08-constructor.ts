/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
	constructor (
		public nombre: string,
		public direccion: string
	) {}
}


class Heroe extends PersonaNormal {
	// private: Sólo visible dentro de esta clase
	// public:  Visible fuera de esta clase
	// static: Podemos acceder al valor de esta propiedad sin crear una estancia de la clase
	// Si no le damos un tipo, siempre será public
	
	// alterEgo: string;
	// edad: number;
	// nombreReal: number;

	// constructor (alterEgo: string) {
	// 	this.alterEgo = alterEgo;
	// }

	constructor (
		public alterEgo: string,
		public edad: number,
		public nombreReal: string
	) {
		super(nombreReal, 'New York, USA');
	}
}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);

