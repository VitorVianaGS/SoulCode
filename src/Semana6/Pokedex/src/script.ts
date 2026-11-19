interface pokemonResponse{

    name: string;

    sprites: {
        front_default: string;
    }

    types: Array<{
        type:{
            name: string;
        };

    }>;
};

const inputElement = document.getElementById("pokemonInput") as HTMLInputElement;
const searchButton = document.getElementById("searchBtn") as HTMLButtonElement;
const cardContainer = document.getElementById("pokemonCard") as HTMLDivElement;

searchButton.addEventListener("click", async () => {
    const busca = inputElement.value.trim().toLowerCase;

    if(!busca){
        cardContainer.innerHTML = "<p class='message error'>Digite o nome do Pokemon</p>"
        return;
    }

    try{
        cardContainer.innerHTML = "<p class='message'>Buscando Pokemon</p>"

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);

        if(!resposta.ok){
            throw new Error("Pokemon não encontrado");
        };
    };

});