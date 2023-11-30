let botaoTeste = document.querySelector('#botaoTeste');
let contador = 0;

function cliqueBotao() {
  contador++;
  console.log('mensagem 1');
  if (contador >= 5) {
    botaoTeste.removeEventListener('click', cliqueBotao);
  }
}

//addEventListner
botaoTeste.addEventListener('click', cliqueBotao);
