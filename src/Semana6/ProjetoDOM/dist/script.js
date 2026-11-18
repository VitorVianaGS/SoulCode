"use strict";
const spanCeara = document.getElementById('botao-contagem-1');
const spanFortaleza = document.getElementById('botao-contagem-2');
const btnCeara = document.getElementById('botao-1');
const btnFortaleza = document.getElementById('botao-2');
const btnResetar = document.getElementById('btn-resetar');
let pontoCeara = 0;
let pontoFortaleza = 0;
function incrementar() {
    spanCeara.textContent = pontoCeara.toString();
    spanFortaleza.textContent = pontoFortaleza.toString();
}
btnCeara.addEventListener('click', (event) => {
    pontoCeara++;
    incrementar();
});
btnFortaleza.addEventListener('click', (event) => {
    pontoFortaleza++;
    incrementar();
});
btnResetar.addEventListener('click', (event) => {
    pontoCeara = 0;
    pontoFortaleza = 0;
    incrementar();
});
//# sourceMappingURL=script.js.map