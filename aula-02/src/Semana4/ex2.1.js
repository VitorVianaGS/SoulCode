/*
Escreva um programa utilizando a estrutura for que 
receba um número inteiro N e exiba a tabuada desse
número de 1 a 10 no formato N x i = Resultado .
*/

function tabuada(n){
    for(let i = 0; i <= 10; i++){
        console.log(`${i} X ${n} = ${i * n}`)
    }
}

tabuada(5)