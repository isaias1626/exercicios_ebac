function criarCarro(modelo, cor) {
    return {
        modelo: modelo,
        cor: cor,
        velocidade: 0,
        acelerar: function () {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h.`);
    },
    frear: function () {
        this.velocidade -= 5;
        console.log(`${this.modelo} freou para ${this.velocidade} km/h.`);
    },
    };
}

function criarMotorista(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        dirigir: function (carro) {
        console.log(`${this.nome} está dirigindo o ${carro.modelo}.`);
        carro.acelerar();
        carro.frear();
        },
    };
}


const carro1 = criarCarro('Fusca', 'azul');
const carro2 = criarCarro('Civic', 'prata');
const motorista1 = criarMotorista('Maria', 30);

motorista1.dirigir(carro1);
motorista1.dirigir(carro2);
