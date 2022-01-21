

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar( personaje: PersonajeLOR, curarX:number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vida:', this.pv);
    }
}
curar( nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();