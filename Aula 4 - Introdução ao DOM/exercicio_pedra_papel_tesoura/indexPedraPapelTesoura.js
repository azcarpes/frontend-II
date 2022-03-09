let escolhaUsuario = parseInt(prompt("Insira um número de 1 a 3:", "1 = Pedra, 2 = Papel, 3 = Tesoura"));

console.log(escolhaUsuario);

let maquina = Math.round(Math.random() * 3 + 1);

let pontosescolhaUsuario = 0;

let pontosMaquina = 0;

switch (escolhaUsuario) {
    case 1: //Pedra
         switch (maquina) {
            case 1: //Pedra
               alert("Ambos escolheram Pedra, deu empate!");
               break;
            case 2: //Papel
               alert("O Papel engoliu a Pedra, a Máquina te venceu!");
               pontosMaquina++;
               break;
            case 3: //Tesoura
               alert("A Pedra quebrou a Tesoura, Parabéns Usuário!");
               pontosescolhaUsuario++;
               break;
         }
         break;

    case 2: //Papel
         switch (maquina) {
            case 1: //Pedra
               alert("O Papel engoliu a Pedra, parabéns, você venceu!");
               pontosescolhaUsuario++;
               break;
            case 2: //Papel
               alert("Ambos escolheram Papel, deu empate!");
               break;
            case 3: //Tesoura
               alert("A Tesoura cortou o papel, a Máquina te venceu!");
               pontosMaquina++;
               break;
         }
         break;

    case 3: //Tesoura
         switch (maquina) {
            case 1: //Pedra
               alert("A Pedra quebrou a Tesoura, a Máquina te venceu!");
               pontosMaquina++;
               break;
            case 2: //Papel
               alert("A tesoura cortou o papel, parabéns, voce venceu!");
               pontosescolhaUsuario++;
               break;
            case 3: //Tesoura
               alert("Ambos escolheram Tesoura, deu empate!");
               break;
         }
         break;
}

if (pontosMaquina > pontosescolhaUsuario) {
   alert("Seus pontos: " +pontosescolhaUsuario);
   alert("Potos da Máquina: " +pontosMaquina);
   alert("A Máquina te venceu");
} else if (pontosescolhaUsuario  > pontosMaquina) {
   alert("Seus pontos: " +pontosescolhaUsuario);
   alert("Potos da Máquina: " +pontosMaquina);
   alert("Parabéns, você venceu!");
} else if (pontosMaquina == pontosescolhaUsuario) {
   alert("Seus pontos: " +pontosescolhaUsuario);
   alert("Potos da Máquina: " +pontosMaquina);
   alert("Deu empate, tente outra vez!");
}