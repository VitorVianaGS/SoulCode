/*
Crie uma função que receba a medida de três lados de um
 triângulo e informe se ele é Equilátero (3 lados iguais),
Isósceles (2 lados iguais) ou Escaleno (3 lados diferentes).
 Valide antes se os lados formam um triângulo válido.
*/

function triangulo(a, b, c){
    if(a + b < c || a + c < b || b + c < a){
        console.log("Não forma um triângulo")
    }else if(a === b && b === c){
        console.log("Equilátero")
    }else if(a === b || a === c || b === c){
        console.log("Isósceles")
    }else{
        console.log("Escaleno")
    }
}

triangulo(5,5,15)