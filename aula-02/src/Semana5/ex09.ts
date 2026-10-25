/*
Exercício 9: Arrays com Tipos e Polimorfismo Polimorfismo
Crie um gerenciador que utiliza polimorfismo com base na interface do Exercício 5:
Crie a interface Notificavel com o método enviarMensagem(texto: string): void .
Crie as classes NotificacaoEmail e NotificacaoSMS implementando Notificavel .
Crie uma função ou classe GerenciadorNotificacoes que recebe um array de Notificavel[] e
dispara mensagens para todos simultaneamente.

*/


interface Notificavel {
    enviarMensagem(texto: string): void;
}

class NotificacaoEmail implements Notificavel {
    enviarMensagem(texto: string): void {
        console.log("Email enviado: " + texto);
    }
}

class NotificacaoSMS implements Notificavel {
    enviarMensagem(texto: string): void {
        console.log("SMS enviado: " + texto);
    }
}

class GerenciadorNotificacoes {
    private notificacoes: Notificavel[];

    constructor(notificacoes: Notificavel[]) {
        this.notificacoes = notificacoes;
    }

    dispararMensagens(texto: string): void {
        this.notificacoes.forEach(notificacao => {
            notificacao.enviarMensagem(texto);
        });
    }
}

// Testando
const email = new NotificacaoEmail();
const sms = new NotificacaoSMS();

const gerenciador = new GerenciadorNotificacoes([email, sms]);

gerenciador.dispararMensagens("Seu pedido foi aprovado!");
