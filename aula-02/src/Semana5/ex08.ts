/*
Exercício 8: Type Aliases e Union Types Literal TypeScript Fundamental
Crie tipos customizados com Union Types para gerenciar o status de um pedido:
Crie o Type Alias StatusPedido = "pendente" | "pago" | "enviado" | "cancelado" .
Crie a classe Pedido que possui um atributo privado status do tipo StatusPedido .
Crie o método atualizarStatus(novoStatus: StatusPedido): void para alterar o status do pedido.

*/


type StatusPedido = "pendente" | "pago" | "enviado" | "cancelado";

class Pedido {
    private status: StatusPedido;

    constructor(status: StatusPedido) {
        this.status = status;
    }

    atualizarStatus(novoStatus: StatusPedido): void {
        this.status = novoStatus;
    }

    consultarStatus(): StatusPedido {
        return this.status;
    }
}

const pedido = new Pedido("pendente");

console.log(pedido.consultarStatus());

pedido.atualizarStatus("pago");
console.log(pedido.consultarStatus());

pedido.atualizarStatus("enviado");
console.log(pedido.consultarStatus());
