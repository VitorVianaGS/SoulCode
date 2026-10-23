class Porta {
    private aberta: boolean = false;
    public readonly sala: string;

    constructor(sala: string) {
        this.sala = sala;
    }

    abrir() {
        this.aberta = true;
    }

    fechar() {
        this.aberta = false;
    }

    estaAberta() {
        return this.aberta;
    }
}

const porta = new Porta("Sala 1");

porta.abrir();
console.log(porta.estaAberta()); // true

porta.fechar();
console.log(porta.estaAberta()); // false

porta.aberta = true;
porta.sala = "Sala 2";
