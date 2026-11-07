/*
Exercício 7: Classes Abstratas Abstração & Herança
Trabalhe com o conceito de classes abstratas:
Crie a classe abstrata FiguraGeometrica com o método abstrato calcularArea(): number .
Crie a classe Quadrado (com o atributo lado ) herdando de FiguraGeometrica e implementando o
cálculo da área.
Crie a classe Circulo (com o atributo raio ) também herdando de FiguraGeometrica e
implementando a área.
*/


abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Quadrado extends FiguraGeometrica {
    constructor(public lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(public raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}


const quadrado = new Quadrado(4);
const circulo = new Circulo(3);

console.log(quadrado.calcularArea());
console.log(circulo.calcularArea());
