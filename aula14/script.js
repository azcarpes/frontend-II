let botaoEnviar = document.getElementById("enviar");
let pokemons = document.getElementById("lista");
let conteudo = document.getElementById("conteudo");


botaoEnviar.addEventListener("click", function () {
    let favoritos = document.createElement("p")
    favoritos.innerText = pokemons.value
    conteudo.appendChild(favoritos);
})

let pokemonjson = JSON.stringify(pokemons.value);
console.log(pokemonjson);

localStorage.setItem(1, pokemonjson);