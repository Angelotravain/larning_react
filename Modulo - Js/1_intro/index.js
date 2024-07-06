var tabela = document.getElementById('tabela');


var btn = document.getElementById('dont');
btn.addEventListener('click', function () {
    for (let i = 0; i <= 10; i++) {
        tabela.innerHTML += '<tr><td class="hidden">1</td><td>Parque Morumbi' + i + '</td><td>R$ 5,00</td><td>Sim</td><td>Paranavaí</td><td><a href="#" class="btn-blue">Editar</a><a href="#" class="btn-red">Excluir</a></td></tr>'
    };
    alert('Adicionado' + i + 'na lista');
});