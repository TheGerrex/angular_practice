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
    year: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Pimp a Butterfly',
    detalles: {
        autor: 'Kendrick Lamar',
        year: 2015
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, year} = detalles;

// console.log('El volumen actual de:', volumen);
// console.log('El segundo actual de:', segundo);
// console.log('El cancion actual de:', cancion);
// console.log('El autor es:', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);