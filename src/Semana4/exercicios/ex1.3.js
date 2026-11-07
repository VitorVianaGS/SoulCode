/*
Construa uma estrutura de menu usando switch que receba um código de produto (1 a 4)
e imprima a categoria correspondente: 1 - Alimento Não Perecível, 2 - Alimento Perecível, 
3 - Vestuário, 4 - Eletrônicos. Retorne "Código Inválido" para outros números.
*/

const codigo = 5;

switch (codigo){
    case 1:
        console.log("Alimento não perecível")
        break
    case 2:
        console.log("Alimento perecível")
        break
    case 3:
        console.log("Vestuário")
        break
    case 4:
        console.log("Eletrônicos")
        break
    default:
        console.log("Código inválido!")
}
