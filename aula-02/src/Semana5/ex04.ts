/*
Exercício 4: Union Types nas Propriedades Type Unions
Crie uma classe Identificador que lida com diferentes formatos de ID:
Atributo privado _codigo do tipo string | number (Union Type).
Construtor que aceita tanto string quanto number .
Método exibirCodigo(): void que imprime o código na tela. Se for string, exiba em letras
maiúsculas.

*/

class Identificador{

    private _codigo: (string | number);

    constructor(_codigo: (string | number)){
        this._codigo = _codigo;
    }

    exibirCodigo(): void{
        if(this._codigo === "String"){
            console.log(this._codigo.toUpperCase());
        }
        console.log(this._codigo);
    }
}
 let ana = new Identificador("Ana");
 let vitor = new Identificador(123);

 ana.exibirCodigo();
 vitor.exibirCodigo();