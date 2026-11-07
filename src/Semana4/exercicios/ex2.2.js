/*
Utilize um laço while para gerar e imprimir os primeiros N termos 
da sequência de Fibonacci (ex: para N = 7 → 0,
1, 1, 2, 3, 5, 8). O valor de N deve ser fornecido pelo usuário.
*/

function fibo(n){

    let a = 0;
    let b = 1;
    let contador = 0;

    while (contador < n) {

        let proximo = a + b;
        a = b;
        b = proximo;

        contador++;
        console.log(proximo)
    }
}

fibo(7)

