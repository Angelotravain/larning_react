

// // arrays podem ser inseridos em qualquer valor

// let lista = [1, 2, 3, 4, 5];

// console.log(lista[0]);

// // propriedades

// const list = [5, 3, 4];

// console.log(list.length);

// // mais sobre arrays

// const arr = ['a', 'b', 'c'];

// console.log(arr[0]);

// // métodos

// const otherNumbers = [1, 2, 3];

// const allNumbers = list.concat(otherNumbers);

// console.log(allNumbers.sort());

// object literals

const person = {
    name: 'Angelo',
    age: null,
    profissao: 'programador'
}

person.name = 'Gabrieli'
console.log(person);


// 6 criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}

console.log(car);

car.doors = 4; // adiciona propriedades na função

console.log(car);


// diferença de arrays eobjetos

// array é melhor com um tipo de dados únicos

// mais sobre objetos

const obj = {
    a: 'teste',
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}
const mergear = (a, b) => {
    return Object.assign(a, b); // gera a cópia de um objeto para o outro

}

mergear(obj2, obj);


console.log(obj2);


// 8- conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação

const a = {
    name: 'Angelo'
}

const b = a;

console.log(a);
console.log(b);

a.age = 31;

console.log(a);
console.log(b);

// loops em array

const users = ['angelo', 'Garieli', 'Rose']

users.push('Maria');
for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}


// 11 - Push the pop

const array2 = ['a', 'b', 'c'];

console.log(array2);

array2.push('d');

console.log(array2);

console.log(array2.pop());

// shift remove o primeiro item da lista

// unshift adiciona o primeiro elemento na lista

// 13 indexof e lastindexof

const myElements = ['Morango', "Maçã", 'Abacate', 'Pera', 'Abacate'];

console.log(myElements.indexOf('Abacate'));
console.log(myElements.indexOf('Maçã'));


console.log(myElements[myElements.indexOf('Maçã')]);
console.log(myElements.indexOf('Manga'));


// slice

const testSlice = ['a', 'b', 'c', 'd', 'e', 'f'];

const subArray = testSlice.slice(2, 4 + 1);

console.log(subArray);

// forEach

const listinha = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

listinha.forEach((numero) => {
    console.log(`O número é ${numero}`);
});


const pessoa1 = [{
    nome: 'Angelo',
    idade: 12
}]

pessoa1.forEach((pessoa) => {
    console.log(pessoa);
});

// includes

const brands = ['BMW', 'VW', 'FIAT'];

if (brands.includes('FIAT')) {
    console.log('há carros Fiat');
}

// reverse

const listInt = [1, 2, 3, 4, 5, 9, 8, 7, 6];

console.log(listInt.reverse());

// métodos em string

// trim

// remove tudo que é texto em uma string

const nomeTrim = '           angelo   \n\n';

console.log(nomeTrim);
console.log(nomeTrim.trim());


//padstart

// insere um texto no começo da string

const test = '1';

const newNumber = test.padStart(4, "0");

console.log(newNumber);

const endPad = newNumber.padEnd(8, "45");

console.log(endPad);

// split

// divide uma string em um array

const nome = "angelo, Gabrieli, Travain, Santos";

const listSplit = nome.split(',');

console.log(listSplit);

// join

// o join une uma lista em uma string

const joinEspace = listSplit.join(',');

console.log(joinEspace);

// repeat

console.log(listSplit[0].repeat(3));


// rest operator

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}


console.log(somaInfinita(1, 2, 3, 4, 5));


// for of

const listNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11];
for (const item of listNew) {
    console.log(item);
}

//destructuring em objetos

const userDatails = {
    firstName: 'Angelo',
    lastName: 'Travain',
    job: 'Programer'
}

const { firstName, lastName, job } = userDatails


console.log(firstName, lastName, job);

// renomear as variáveis

const { firstName: primeiroNome } = userDatails;// estrutura do desctruction


console.log(primeiroNome);


//destructuring em arrays

const myList = ['Avião', 'submarino', 'barco', 'carro'];

const [veiculoA, veiculoB, veiculoC] = myList;


console.log(veiculoA, veiculoC);