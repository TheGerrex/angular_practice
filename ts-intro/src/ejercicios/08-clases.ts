/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}

}

class Heroe extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, "New Brooklyn");
    }
    

}

const spiderman = new Heroe('Spiderman', 18, 'Peter Parker');

console.log(spiderman)