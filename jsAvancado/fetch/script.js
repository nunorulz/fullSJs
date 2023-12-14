function exibirNaTela(dados) {
  console.log('exibir na Tela', dados);
}
function exibirErro() {
  console.log('Ops, deu erro!');
}
const botaoCarregar = document.querySelector('#botaoCarregar');

botaoCarregar.onclick = () =>
  fetch('https://jsonplaceholder.typicode.com/photos', 'GET')
    .then(exibirNaTela)
    .catch(exibirErro);
