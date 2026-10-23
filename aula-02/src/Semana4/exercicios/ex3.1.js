/*
Escreva uma função puramente declarativa celsiusParaFahrenheit(celsius) que receba um valor em graus
Celsius e retorne o equivalente em Fahrenheit utilizando a fórmula F = (C * 9/5) + 32 .
*/

function conversor(celsius){
    return (celsius * 9/5) + 32;
}

console.log(conversor(25))