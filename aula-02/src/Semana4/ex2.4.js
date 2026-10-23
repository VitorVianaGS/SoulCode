/*
Crie um algoritmo com laços aninhados que percorra os números de 1 a 50 
e identifique quais deles são números primos, exibindo a contagem total 
de primos encontrados no intervalo.
*/

function filtro() {
  let total = 0;

  for (let numero = 2; numero <= 50; numero++) {
    let primo = true;
    if (numero < 2) {
        primo = true;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      console.log(numero);
      total++;
    }
  }
  console.log(`Total de primos: ${total}`);
}

filtro();
