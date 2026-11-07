/*
Crie um script contendo uma variável global taxaServico = 0.10 . Escreva uma função que declare uma
variável local com o mesmo nome taxaServico = 0.15 e calcule o total de uma conta. Imprima os valores
dentro e fora da função para comprovar que o escopo local não sobrescreveu o global.
*/

let conta = 100;
let taxaServico = 0.10;
let total = conta + (conta * taxaServico)

function varLocal(){
    let taxaServico = 0.15
    let total = conta + (conta * taxaServico)
    console.log(total)
}

console.log(total)
varLocal()
