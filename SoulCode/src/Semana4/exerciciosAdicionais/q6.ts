/*
Questão 6 UNION TYPES EM FUNÇÕES
Crie uma função chamada exibirID que receba um parâmetro id do tipo Union Type (string |
number) e imprima a mensagem "O ID é: " + id no console.
*/

function exibirID(id: string | number){
    return console.log(`O ID é: ${id}`)
}

exibirID(123)
exibirID("ABC")