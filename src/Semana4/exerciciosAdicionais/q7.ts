/*
Questão 7 TYPE NARROWING
Na função exibirID da questão anterior, adicione uma verificação com typeof. Se o id for string,
exiba em letras maiúsculas (toUpperCase()). Se for number, exiba o valor multiplicado por 2.
*/

function exibirID(id: string | number){
    if(typeof id === "string"){
        return console.log(id.toUpperCase());

    }else{
        return console.log(id * 2);
        
    }
}

exibirID(123)
exibirID("Vitor")

