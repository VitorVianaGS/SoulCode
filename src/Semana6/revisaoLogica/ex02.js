/*
QUESTÃO 2: CALCULADORA DE TROCO ARRAY & LOOP JS
Escreva uma função JS calcularTroco(valorTroco) que retorne um objeto informando a quantidade de cada
nota (50, 20, 10, 5, 1) necessária para entregar o troco mínimo.
*/

function calcularTroco(valorTroco) {
    const notas = [50, 20, 10, 5, 1];
    let resultado = {};

    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        let qtdNotas = 0;

        while (valorTroco >= nota) {
            qtdNotas++;
            valorTroco -= nota;
        }

        if (qtdNotas > 0) {
            resultado[nota] = qtdNotas;
        }
    }
    
    return resultado;
}

console.log(calcularTroco(6));
console.log(calcularTroco(15));
console.log(calcularTroco(16));
console.log(calcularTroco(97));

