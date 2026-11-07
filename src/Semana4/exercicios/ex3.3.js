/*
Crie uma função somarNumeros(...valores) que seja capaz 
de receber qualquer quantidade de argumentos
numéricos e retorne a soma de todos eles.
*/

function somar(...valores){
    return valores.reduce((acc, valorAtual) => acc + valorAtual, 0);
}

console.log(somar(1,2,3))
console.log(somar(1,2,3,4))