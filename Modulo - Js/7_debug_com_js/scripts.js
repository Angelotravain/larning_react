// strict mode

"use strict";

const opa = 'teste';

console.log(opa);


// 2- console.log

let a = 1;
let b = 2;

if (a == 1) {
    a = b + 2;
}

console.log(a);


for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}


// 3 - debugger

//debugger;

for (let i = 0; i < 10; i++) {
    console.log(i);

}

// tratamento de dados

function checkNumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log('Valor incorreto!!');
    } else
        console.log('Valor correto!');

    return result;
}



checkNumber(5);

// exceptions

let x = 10;

// if (x != 11) {
//     throw new Error("O valor de x não pode ser diferente de 11");
// }

// try catch

try {
    const soma = x + y;
} catch (error) {
    console.log(`Erro no programa ${error}`);
}

// finaly

try {
    const value = checkNumber('sdssd');

    if (!value) {
        throw new Error('Valores inválidos');
    }
} catch (e) {
    console.log(`Aconteceu um problema! ${e}`);
} finally {
    console.log('O código foi executado');

}

// assertion

const checkArray = (arr) => {
    if (arr.lenght === 0) {

    }
}