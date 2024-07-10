// movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);


// selecionando por tag

const listItens = document.getElementsByTagName('li');

console.log(listItens);

// selecionando elemento por id

const titulo = document.getElementById('title');

titulo.style.color = 'blue';

// selecionado elementos por classe

const products = document.getElementsByClassName('product');

console.log(products);

// selecionando por elemento

const elemento = document.querySelector('.product');

console.log(elemento);

// alterando o html

// insertBefore

const h2 = document.createElement('h2');
h2.textContent = 'teste';

const header = titulo.parentElement;

// inseriu antes do elemento de titulo
// porém ele precisou referenciar no pai para inserir no filho
// que no caso é o título 

// header.insertBefore(h2, titulo);

// appendChield

const navLinks = document.querySelector('nav ul');

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChield

header.replaceChild(h2, titulo);

// criando nós

const mainContainer = document.getElementById('main-container');

const myText = document.createTextNode("Agora vamos criar um novo título!");

console.log(myText);

const h3 = document.createElement('h3');

h3.appendChild(myText);

mainContainer.appendChild(h3);

// trabalhando com atributos

const firstLink = navLinks.querySelector('a');

console.log(firstLink);

firstLink.setAttribute('href', 'https://www.google.com')

console.log(firstLink.getAttribute('href'));

firstLink.setAttribute('target', '_blank')


// altura e largura

const footer = document.querySelector('footer');

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// posição do elemento

const product = products[0];

console.log(product.getBoundingClientRect());

// cores

mainContainer.style.backgroundColor = '#444';