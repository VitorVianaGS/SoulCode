/*
Elabore um algoritmo que receba o salário bruto de um funcionário 
e aplique alíquotas condicionais: até R$ 2.000
(Isento); de R$ 2.001 a R$ 3.500 (10%); acima de R$ 3.500 (20%).
Retorne o valor final com desconto.
*/

function aliquota(salario){
    let descontado = 0;

    if (salario <= 2000){
        descontado = salario;

    }else if(salario < 3500){
        descontado = salario - (salario * 10 / 100);
        
    }else{
        descontado = salario - (salario * 20 / 100);
    }
    
    return descontado;
}

console.log(aliquota(4000))