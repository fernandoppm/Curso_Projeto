// Jogo de Adivinhação


import * as readline from 'readline-sync';

// Enum para definir os níveis e seus limites
enum Nivel {
  Facil = 10,
  Medio = 50,
  Dificil = 100
}

// Função principal do jogo
function jogar(): void {
  console.log("🎮 Bem-vindo ao Jogo de Adivinhação!");
  console.log("Escolha o nível de dificuldade:");
  console.log("1 - Fácil (1 a 10)");
  console.log("2 - Médio (1 a 50)");
  console.log("3 - Difícil (1 a 100)");

  // Pegando escolha do jogador
  let nivelEscolhido = Number(readline.question("Digite o numero do nivel: "));

  // Definindo o limite com base no nível escolhido
  let limite: number;
  switch (nivelEscolhido) {
    case 1:
      limite = Nivel.Facil;
      break;
    case 2:
      limite = Nivel.Medio;
      break;
    case 3:
      limite = Nivel.Dificil;
      break;
    default:
      console.log("Nível inválido! Usando nível Fácil por padrão.");
      limite = Nivel.Facil;
  }

  // Gerando número aleatório de 1 até o limite
  const numeroSecreto = Math.floor(Math.random() * limite) + 1;

  // Array para armazena todas as tentativas do jogador
  let tentativas: number[] = [];
  let acertou = false;

  // loop, executa até o jogador acertar
  while (!acertou) {
    let palpite = Number(readline.question(`Digite seu palpite (entre 1 e ${limite}): `));

    // Verificando se é número válido
    if (isNaN(palpite) || palpite < 1 || palpite > limite) {
      console.log(`❌ Por favor, digite um número válido entre 1 e ${limite}.`);
      continue;
    }

    tentativas.push(palpite); // Guardando tentativa

    // Verificando se acertou, e fornece feedback
    if (palpite === numeroSecreto) {
      console.log(`🎉 Você acertou! O número secreto era : ${numeroSecreto}`);
      console.log(`📊 Você fez ${tentativas.length} tentativa(s).`);
      console.log("Seus palpites:", tentativas.join(", "));
      acertou = true;
    } else if (palpite < numeroSecreto) {
      console.log("🔼 Tente um número MAIOR.");
    } else {
      console.log("🔽 Tente um número MENOR. ");
    }
  }
}

// Chamando a função para iniciar o jogo
jogar();

