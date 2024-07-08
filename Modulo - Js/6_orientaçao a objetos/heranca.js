class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}


const shark = new Lobo(4, 'Shark');


export default shark;

console.log(shark);

console.log(shark instanceof her.Lobo);