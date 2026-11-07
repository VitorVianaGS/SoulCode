/*
Exercício 1: Tipos Básicos e Modificadores de Acesso Fundamentos & Encapsulamento

Crie uma classe simples chamada Pessoa com a seguinte estrutura:
Atributo público: nome (string).
Atributo privado: _idade (number).
Atributo protegido: _cpf (string).
Crie um método getIdade(): number que retorna a idade e um método setIdade(novaIdade:
number): void que só aceita números positivos
*/

class Pessoa{

    public nome: string;
    private _idade!: number;
    protected _cpf: string;

    constructor(nome: string, _idade: number, _cpf: string){
        this.nome = nome;
        this.setIdade(_idade);
        this._cpf = _cpf;
    }

    getIdade(): number{
        console.log(this._idade);
        return this._idade;
    }

    setIdade(novaIdade: number): void{
        if(!Number.isInteger(novaIdade) || novaIdade < 0){
            throw new Error("Idade inválida!")
        }
        this._idade = novaIdade
    }
}

let vitor = new Pessoa("Vitor", 27, "12345");

vitor.getIdade();

vitor.setIdade(30);

vitor.getIdade();
