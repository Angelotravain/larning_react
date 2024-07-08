// mais sobre classes

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}


const scania = new Caminhao(6, 'Verde');

scania.descreverCaminhao();

//override

// troca valores na classe e os atributos dela


// symbol

class Aviao {
    constructor(marca, turbina) {
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol();

Aviao.prototype[asas] = 2; // atribui um novo atributo (propriedade) dentro da classe, é um symbolo no projeto dinamico


const boing = new Aviao("boeing", 10);

console.log(boing);


