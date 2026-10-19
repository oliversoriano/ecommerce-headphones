// Troca o produto em destaque ao clicar em uma miniatura
const imagemPrincipal = document.querySelector('.one');
const miniaturas = document.querySelectorAll('.cor');

miniaturas.forEach((miniatura) => {
    miniatura.addEventListener('click', () => {
        imagemPrincipal.src = miniatura.dataset.img;

        // Atualiza a cor de destaque da página com a cor do modelo escolhido
        document.documentElement.style.setProperty('--main-color', miniatura.style.getPropertyValue('--cor'));

        miniaturas.forEach((m) => m.classList.remove('ativa'));
        miniatura.classList.add('ativa');
    });
});

// Menu mobile: abre/fecha a navegação e troca o ícone (menu <-> X)
const menu = document.querySelector('#menu');
const navegacao = document.querySelector('.navegacao');
const iconeMenu = menu.querySelector('i');

menu.addEventListener('click', () => {
    navegacao.classList.toggle('aberta');
    iconeMenu.classList.toggle('bx-menu');
    iconeMenu.classList.toggle('bx-x');
});
