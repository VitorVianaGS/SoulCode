class Lampada {
    private ligada: boolean = false


    ligar(){
        this.ligada = true
    }

    desligar(){
        this.ligada = false
    }

    estaLigada(){
    if (this.ligada) {
        console.log("Ligada")
    } else {
        console.log("Desligada")
    }
}
}

const lampada = new Lampada
lampada.estaLigada()

lampada.ligar()
lampada.estaLigada()

lampada.ligada = false
lampada.estaLigada()

