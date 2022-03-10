function dark() {

    let bodydark = document.querySelectorAll('body');

    bodydark.forEach(body => {
        body.classList.add('bodydark');
    })

    let titulodark = document.querySelectorAll('h1');

    titulodark.forEach(h1 => {
        h1.classList.add('titulodark');
    })

    let itemdark = document.querySelectorAll('.item');

    itemdark.forEach(item => {
        item.classList.add('itemdark');
    })
    
    let textodark = document.querySelectorAll('.container');

    textodark.forEach(container => {
    container.classList.add('textodark');
    })
}

let felinoEscolhido = prompt("Escolha seu felino:", "0 - Tigre, 1 - Leão, 2 - Leopardo, 3 - Pantera, 4 - Jaguar, 5 - Guepardo");
let imagemEscolhida = prompt("Insira o link de uma imagem e em seguida clique em Alterar Imagem");

function alterarImagem() {
    let imagem = document.querySelectorAll('img');

    imagem = imagem[felinoEscolhido];

    imagem.setAttribute("src", imagemEscolhida);

}