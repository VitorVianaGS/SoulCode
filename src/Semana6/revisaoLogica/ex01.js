/*
QUESTÃO 1: ESTADO DAS LÂMPADAS OBJETOS & FUNÇÕES JS
Crie uma função JS testarLampadas() que simule o estado de 3 lâmpadas (acesa, apagada, quente) e identifique
qual pertence ao interruptor acionado.
*/

function estadoLampada(lampada){
    if(lampada == 1){
        console.log('Acesa');
    } else if (lampada == 2){
        console.log('Apagada');   
    }else{
        console.log('Quente');
    }
}

estadoLampada()
estadoLampada(1)
estadoLampada(2)