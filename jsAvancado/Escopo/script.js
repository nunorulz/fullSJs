/* 
Global
Local

O escopo determina a visibilidade de uma variável

As funções no JS criam o seu próprio escopo
As variáveis de uma função não são aacessíveis fora dela
*/

function teste() {
  let a = 123;
}

teste();
console.log(a);
