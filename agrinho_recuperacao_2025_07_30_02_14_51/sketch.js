let jogoIniciado = false; // controle para iniciar o jogo

function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🥬", "🍅", "🥕", "🌽"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

function draw() {
  if (!jogoIniciado) {
    mostraTelaInicial(); // Mostra as instruções enquanto o jogo não começou
  } else {
    ativaJogo();
    desenhaJogadores();
    desenhaLinhaDeChegada();
    verificaVencedor();
  }
}

function mostraTelaInicial() {
  background("#0c3b17");
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("JOGO DAS HORTALIÇAS\n\nPressione:\nA para 🥬\nS para 🍅\nD para 🥕\nF para 🌽\n\nCorra até a linha branca!\n\nPressione ESPAÇO para começar", width / 2, height / 2);
}

function ativaJogo() {
  if (focused == true) {
    background("#17682D");
  } else {
    background("rgb(32,219,21)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  if (!jogoIniciado && key === " ") {
    jogoIniciado = true; // Inicia o jogo ao apertar espaço
  }

  if (jogoIniciado) {
    for (let i = 0; i < quantidade; i++) {
      if (key == teclas[i]) {
        xJogador[i] += random(20);
      }
    }
  }
}
