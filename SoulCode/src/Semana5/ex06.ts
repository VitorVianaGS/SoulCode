/*
Exercício 6: Simulação de Múltipla Herança com Interfaces Interfaces & Dobre Herança
Implemente múltiplos contratos em uma mesma classe:
Crie a interface Imprimivel com o método imprimir(): void .
Crie a interface Exportavel com o método exportarJSON(): string .
Crie a classe Relatorio que implementa ambas as interfaces, fornecendo o código para ambos os
métodos.

*/


interface Imprimivel {
    imprimir(): void;
}

interface Exportavel {
    exportarJSON(): string;
}

class Relatorio implements Imprimivel, Exportavel {
    private titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    imprimir(): void {
        console.log(this.titulo);
    }

    exportarJSON(): string {
        return JSON.stringify({
            titulo: this.titulo
        });
    }
}
const relatorio = new Relatorio("Relatório de Vendas");

relatorio.imprimir();

console.log(relatorio.exportarJSON());
