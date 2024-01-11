class Animal {
    constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    }

fazerBarulho() {
    console.log(`${this.nome} deita.`);
    }
}

class Cachorro extends Animal {
    latir() {
    console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    miar() {
    console.log(`${this.nome} está miando.`);
    }
}

const animal1 = new Animal('Hulk', 'desconhecido');
const cachorro1 = new Cachorro('Bolinha', 'cachorro');
const gato1 = new Gato('Garfield', 'gato');

animal1.fazerBarulho();
cachorro1.fazerBarulho();
cachorro1.latir();
gato1.fazerBarulho(); 
gato1.miar();
