window.addEventListener('DOMContentLoaded', function() {
    var meuH1 = document.getElementById('title');
    var larguraMaxima = 900;
  
    function verificarLargura() {
      if (window.innerWidth <= larguraMaxima) {
        meuH1.textContent = 'Largura muito curta';
      } else {
        meuH1.textContent = 'Jogo da Velha';
      }
    }
  
    verificarLargura();
    window.addEventListener('resize', verificarLargura);
  });

let lista_teclas = document.querySelectorAll('.sub_container');
let currentPlayer = 'X';
let primeiroJogador = 'X';

function marca(event) {
  var teclaClicada = event.target;

  if (teclaClicada.textContent === '') {
    teclaClicada.innerHTML = `<h1 class='marked'>${currentPlayer}</h1>`;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  } else {
    console.log('Nada acontece');
  }

  if (verificarVitoria()) {
    limparMarcas();
    primeiroJogador = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayer = primeiroJogador;
  }
}

function limparMarcas() {
  lista_teclas.forEach((tecla) => {
    tecla.innerHTML = '';
  });
}

function verificarVitoria() {
  const combinacoesVitoria = [
    // Linhas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Colunas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonais
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combinacao of combinacoesVitoria) {
    const [a, b, c] = combinacao;
    const teclaA = lista_teclas[a];
    const teclaB = lista_teclas[b];
    const teclaC = lista_teclas[c];

    if (
      teclaA.textContent !== '' &&
      teclaA.textContent === teclaB.textContent &&
      teclaB.textContent === teclaC.textContent
    ) {
      // Vitória alcançada por teclaA.textContent (X ou O)
      console.log('Vitória do jogador: ' + teclaA.textContent);
      ponto = document.querySelector(`.point${teclaA.textContent}`);
      ponto.textContent = +ponto.textContent + 1;
      return true;
    }
  }

  return false;
}

for (contador = 0; contador < lista_teclas.length; contador++) {
    let tecla = lista_teclas[contador];
    tecla.addEventListener('click', marca);
}

let button = document.querySelector('.button');
button.addEventListener('click', limparMarcas);



  