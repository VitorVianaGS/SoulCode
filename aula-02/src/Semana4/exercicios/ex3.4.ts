/*
Demonstre o conceito de variable shadowing (sombreamento de variável) criando 
uma função que utilize o mesmo nome de parâmetro que uma variável externa existente 
no módulo, explicando através do comportamento da saída qual valor teve prioridade 
na execução.
*/

const mensagem: string = "Mensagem do escopo global";

function exibirMensagem(mensagem: string): void {
    // O parâmetro local faz shadowing da variável global com o mesmo nome
    console.log(`Dentro da função: ${mensagem}`);
}

console.log(`Fora da função: ${mensagem}`);
exibirMensagem("Mensagem passada por argumento");
