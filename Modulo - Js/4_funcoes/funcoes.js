// function imprimir() {
//     return "Função criada!";
// }


// console.log(imprimir());

// // arrow function

// const testArrow = () => {
//     console.log('esta é uma arrow function');
// }

// const parOuImpar = (n) => {
//     if (n % 2 === 0) {
//         console.log('Par');
//         return;
//     }
//     console.log("impar");
// }

// parOuImpar(4);

// parOuImpar(11);

// // parametros opcionais

// var multiplicacao = function (m, n) {
//     if (n === undefined) {
//         return m * 2;
//     } else {
//         return m * n;
//     }
// }

// console.log(multiplicacao(5));
// console.log(multiplicacao(5, 3));

// // 8 - valor default

// const customGreeting = (name, greet = "Olá") => {
//     return `${greet}, ${name}!`;
// }

// console.log(customGreeting('Angelo'));
// console.log(customGreeting("angelo", "bom dia"));

// closure

function somFunction() {
    let txt = "Algum texto"

    function display() {
        console.log(txt);
    }

    display();
}

somFunction();

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(2);

const c2 = multiplicationClosure(9);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - recursao

const untilTen = (n, m) => {
    if (n < 10) {
        console.log('a função parou de excutar!');
    } else {
        const x = n - m
        console.log(x);

        untilTen(x, m);
    }
}

untilTen(100, 7);