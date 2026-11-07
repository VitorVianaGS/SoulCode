/*
Crie um script de login que verifique o nome de usuário e senha. 
Se o usuário for "admin" e a senha "1234" ,
retorne "Acesso Total". Se o usuário for "user" e a senha "1234" , 
retorne "Acesso Limitado". Caso contrário,
retorne "Acesso Negado".
*/

function validar(usuario, senha){

    if(usuario === "admin" && senha === 1234){
        return 'Acesso Total'
    }else if(usuario === "user" && senha === 1234){
        return 'Acesso Limitado'
    }else{
        return 'Acesso Negado'
    }
}

console.log(validar("admin", 1234))
console.log(validar("user", 1234))
console.log(validar("vitor", 1234))