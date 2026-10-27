/*
Exercício 10: Generics Básicos com Classes Generics & TS Avançado

Crie uma estrutura flexível e reativa para armazenar dados de qualquer tipo:
Crie a classe genérica Caixa<T> .
Adicione um atributo privado _conteudo do tipo T .
Implemente os métodos guardar(item: T): void e retirar(): T .
Teste a classe instanciando uma Caixa<string> para textos e uma Caixa<number> para números.
*/

class Caixa<T>{
    private _conteudo: T;

    constructor(_conteudo: T){
        this._conteudo = _conteudo
    }

    guardar(item: T): void{
        this._conteudo = item;
    }

    retirar(): T{
        console.log(`${this._conteudo}: foi removido da caixa`);
        return this._conteudo;
    }
}

let caixaTexto = new Caixa<string>("Livro");
let caixaNumero = new Caixa<number>(100);

caixaTexto.retirar();
caixaNumero.retirar();
