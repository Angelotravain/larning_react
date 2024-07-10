// selecionando os elementos
const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const title = document.querySelector('#multiplication-title');
const multiplocationTable = document.querySelector("#multiplication-operations");
// funções
const createTable = (number, multiplicator) => {

    multiplocationTable.innerHTML = "";

    for (i = 1; i <= multiplicator; i++) {
        const result = number * i;

        const template = ` <div class="row">
                            <div class="operation">${number} x ${i} =</div>
                            <div class="result">${result}</div>
                           </div>`

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, 'text/html');

        const row = htmlTemplate.querySelector('.row');

        multiplocationTable.appendChild(row);
    }
    title.textContent = 'Tabuada do número:' + number;
}
// eventos
multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    console.log(multiplicationNumber, multiplicatorNumber);

    createTable(multiplicationNumber, multiplicatorNumber);
})