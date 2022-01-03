/*
    ===== Código de TypeScript =====
*/

import { calcularIVA, Producto } from "./06-desestucturacion-funciones";

// interface Producto {
// 	desc: string;
// 	precio: number;
// }

const carritoCompra: Producto[] = [
	{
		desc: 'Telefono 1',
		precio: 100
	},
	{
		desc: 'Telefono 2',
		precio: 150
	}
]

const [total, iva] = calcularIVA(carritoCompra);

console.log('Total: ', total);
console.log('IVA: ', iva);

