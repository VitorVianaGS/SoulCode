/*
Exercício 5: Criação e Implementação de Interface Interfaces
Modele um contrato básico de autenticação:
Crie uma interface Autenticavel com o método autenticar(senha: string): boolean .
Crie a classe Usuario que implementa a interface Autenticavel .
A classe deve ter o atributo privado senhaCorreta e validar a senha digitada no método autenticar .

*/

interface Autenticavel{
    autenticar(senha: string): boolean
}

class Usuario implements Autenticavel{
    private senhaCorreta: string;

    constructor(senhaCorreta: string){
        this.senhaCorreta = senhaCorreta
    }

    autenticar(senha: string): boolean {
        if (this.senhaCorreta === senha){
            return true;
        }
        return false;
    }
}

const usuario = new Usuario("Ana");

console.log(usuario.autenticar("Ana"));
console.log(usuario.autenticar("1234"));

