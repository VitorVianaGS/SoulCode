const spanCeara = document.getElementById('botao-contagem-1') as HTMLSpanElement;
const spanFortaleza = document.getElementById('botao-contagem-2') as HTMLSpanElement;

const btnCeara = document.getElementById('botao-1') as HTMLButtonElement;
const btnFortaleza = document.getElementById('botao-2') as HTMLButtonElement;
const btnResetar = document.getElementById('btn-resetar') as HTMLButtonElement;

let pontoCeara: number = 0;
let pontoFortaleza: number = 0;

function incrementar(): void {
    spanCeara.textContent = pontoCeara.toString();
    spanFortaleza.textContent = pontoFortaleza.toString();
}

btnCeara.addEventListener('click', (event: MouseEvent): void => {
    pontoCeara++;
    incrementar();
});

btnFortaleza.addEventListener('click', (event: MouseEvent): void => {
    pontoFortaleza++;
    incrementar();
});

btnResetar.addEventListener('click', (event: MouseEvent): void => {
    pontoCeara = 0;
    pontoFortaleza = 0;
    incrementar();
});