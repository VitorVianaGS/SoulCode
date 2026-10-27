/*
Exercício 3: Herança Simples e Sobrescrita de Método Herança
Crie uma hierarquia simples de animais:
Classe base Animal com o atributo nome (string) e o método emitirSom(): string que retorna
"Som genérico" .
Classe Cachorro que herda de Animal e sobrescreve o método emitirSom() para retornar "Au
Au!" .
Classe Gato que herda de Animal e sobrescreve para retornar "Miau!" .

*/

class Animal{
    public nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
    emitirSom(): string{
        return "Som genérico";
    }
}
let animal = new Animal("Animal")
console.log(animal.emitirSom())


class Cachorro extends Animal{
    emitirSom(): string {
        return "Au Au"
    }
}
let rex = new Cachorro("Rex")
console.log(rex.emitirSom())


class Gato extends Animal{
    emitirSom(): string {
        return "Miau Miau"
    }
}
let yumi = new Gato("Yumi")
console.log(yumi.emitirSom());
