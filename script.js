function prato(itemClicado) {
    const botaoSel = document.querySelector('.prato2');
    if ( botaoSel !== null) {
        botaoSel.classList.remove('prato2');
        botaoSel.children[3].children[1].classList.add('prato1');
    }
    itemClicado.children[3].children[1].classList.toggle('prato1');
    itemClicado.classList.toggle('prato2');
    if (document.querySelector('.prato2') && document.querySelector('.bebida2') && document.querySelector('.sobremesa2')) {
        document.querySelector('.botao').children[0].classList.add('comprafechada');
    }
}
function bebida(itemClicado) {
    const botaoSel = document.querySelector('.bebida2');
    if ( botaoSel !== null) {
        botaoSel.classList.remove('bebida2');
        botaoSel.children[3].children[1].classList.add('bebida1');
    }
    itemClicado.children[3].children[1].classList.toggle('bebida1');
    itemClicado.classList.toggle('bebida2');
    if (document.querySelector('.prato2') && document.querySelector('.bebida2') && document.querySelector('.sobremesa2')) {
        document.querySelector('.botao').children[0].classList.add('comprafechada');
    }
}
function sobremesa(itemClicado) {
    const botaoSel = document.querySelector('.sobremesa2');
    if ( botaoSel !== null) {
        botaoSel.classList.remove('sobremesa2');
        botaoSel.children[3].children[1].classList.add('sobremesa1');
    }
    itemClicado.children[3].children[1].classList.toggle('sobremesa1');
    itemClicado.classList.toggle('sobremesa2');
    if (document.querySelector('.prato2') && document.querySelector('.bebida2') && document.querySelector('.sobremesa2')) {
        document.querySelector('.botao').children[0].classList.add('comprafechada');
    }
}
function continuar() {
    if (document.querySelector('.comprafechada')) {
        let pratoNome = document.querySelector('.prato2').children[1].children[0].textContent;
        let pratoValor = Number.parseFloat(document.querySelector('.prato2').children[3].children[0].children[0].textContent);
        let bebidaNome = document.querySelector('.bebida2').children[1].children[0].textContent;
        let bebidaValor = Number.parseFloat(document.querySelector('.bebida2').children[3].children[0].children[0].textContent);
        let sobremesaNome = document.querySelector('.sobremesa2').children[1].children[0].textContent;
        let sobremesaValor = Number.parseFloat(document.querySelector('.sobremesa2').children[3].children[0].children[0].textContent);

        let valor = pratoValor + bebidaValor+ sobremesaValor;
        let total = valor.toFixed(2)

        let texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${pratoNome}
- Bebida: ${bebidaNome}
- Sobremesa: ${sobremesaNome}
Total: R$ ${valor}`);

        const url = `https://wa.me/5537999129470?text=${texto}`;
        const btn = document.querySelector('.botao').children[0];
        function send(url) {
            const win = window.open(url)
        }
        btn.addEventListener('click', () => {
            send(url)
        });
    };
}