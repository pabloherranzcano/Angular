/*
    ===== Código de TypeScript =====
*/

export interface Producto {
	desc: string;
	precio: number;
}

const telefono: Producto = {
	desc: 'Nokia 3210',
	precio: 150
}

const tablet: Producto = {
	desc: 'iPad Air',
	precio: 650
}

// function calcularIVA(productos: Producto[]): number {
// 	let total = 0;

// 	productos.forEach(
// 		(producto) => {
// 			total += producto.precio
// 		}
// 	)

// 	return total *0.21;
// }
export function calcularIVA(productos: Producto[]): [number, number] {
	let total = 0;

	productos.forEach(
		({ precio }) => {
			total += precio
		}
	)

	return [total, total *0.21];
}

const articulos = [telefono, tablet]

const [ total, iva ] = calcularIVA(articulos);

// console.log('Total: ', total); 
// console.log('IVA: ', iva); 