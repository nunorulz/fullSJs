function trasformarEmJson(response) {
  return response.json();
}
function exibirNaTela(dados) {
  console.log(dados);
}
function exibirErro() {
  console.log('Ops, deu erro!');
}
const botaoCarregar = document.querySelector('#botaoCarregar');
botaoCarregar.onclick = aoClicarNoBotao;

async function aoClicarNoBotao() {
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(trasformarEmJson)
    .catch(exibirErro);

  const { name, email, phone } = dados;
  console.log(name, email, phone);
}
