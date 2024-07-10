

async function somarComDelay(a, b) {
    return a + b;
}



somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
})

// async com await

function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolveu a promisse');
        }, 2000);
    })
}


async function chamadaAsync() {
    console.log('Antes da resposta!');
    let result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();


// generators

function* generator() {
    yield 1;
    yield 2;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);