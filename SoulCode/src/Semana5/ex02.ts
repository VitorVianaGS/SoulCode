/*
Exercício 2: Métodos Getters e Setters (Properties) Encapsulamento
Implemente uma classe Produto utilizando os acessores do TypeScript:
Atributos privados: _nome (string) e _preco (number).
Utilize o acessor get preco() para retornar o preço.
Utilize o acessor set preco(valor: number) que impede que o preço seja definido como um valor
menor que zero.
*/

class Produto{

    private _nome: string;
    private _preco!: number;

    constructor(_nome: string, _preco: number){
        this._nome = _nome;
        this.preco = _preco;
    }

    get preco(): number{
        return this._preco
    }

    set preco(valor){
        if(valor < 0){
            throw new Error("Valor inválido")
        }
        this._preco = valor
    }
}

let copo = new Produto("Copo", 50)

console.log(copo.preco);

copo.preco = 80;

console.log(copo.preco);
