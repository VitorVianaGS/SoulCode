function filtro(){
    let total = 0;

    for(let numero = 1; numero < 50; numero++){
        if(numero < 2){
            let primo = true
        

        for(let i = 2; i < numero; i++){
            if(numero % i === 0){
                primo = false;
                break
            }
        }
        total++
    }
}
    console.log(`Total de primos: ${total}`)
}

filtro()