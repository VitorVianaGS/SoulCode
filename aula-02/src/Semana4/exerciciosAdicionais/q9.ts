/*
Questão 9 OBJECT INFERENCE
Crie um objeto produto contendo nome ("Notebook") e preco (3500) por inferência. Explique o que
acontece ao tentar atribuir a string "R$ 3500" ao campo preco.
*/

let produto = {
    nome: "Notebook",
    preco: 3500
};

produto.preco = "R$ 3500"; // já denuncia que o tipo do preco não é string