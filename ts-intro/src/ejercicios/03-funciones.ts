/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar( n:number, base:number, n2?:number): number {
    return n * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar( personaje: PersonajeLOR, curarX ):void  {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Trancos',
    pv: 450,
    mostrarHP() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP()