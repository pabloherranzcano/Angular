/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];

habilidades.push(true);


interface Personaje {
	nombre: string;
	hp: number;
	habilidades: string[];
	puebloNatal?: string;
}

const personaje: any = {
	nombre: 'Pablo',
	hp: 100,
	habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );