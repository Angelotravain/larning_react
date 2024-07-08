// const animal = {
//     nome: 'Bob',
//     latir: function () {
//         console.log('au,au');
//     }
// }

// console.log(animal.nome);

// animal.latir();


// // aprofundando em métodos

// const pessoa = {
//     nome: 'Angelo',

//     getNome: function () {
//         return this.nome;
//     },

//     setNome: function (novoNome) {
//         this.nome = novoNome;
//     }
// }

// console.log(pessoa.nome);

// pessoa.setNome('gabrieli');

// console.log(pessoa.getNome());

// // prototype

// const texto = 'assada';

// // console.log(Object.getPrototypeOf(texto));

// // mais sobre prototype

// const myObject = {
//     a: 'b'
// }

// console.log(Object.getPrototypeOf(myObject));

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject['a']);

// classes básicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemão';



console.log(pastorAlemao.patas);

// função construtura

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}


const bob = criarCachorro('bob', 'pincher');

console.log(bob);

// funções como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}


const husky = new Cachorro('Ozzy', 'Husky');

console.log(husky.nome);

// métodos na função construtora

Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuuu!");
}

husky.uivar();


// classes ES6

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jef = new CachorroClasse('jeff', 'Labrador');

console.log(jef);