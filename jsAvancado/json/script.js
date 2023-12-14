/*

JSON
Javascript Object Notation

*/

const objeto = {
  nome: 'fulado',
  idade: 23,
};

const json = JSON.stringify(objeto);
const jsonParseado = JSON.parse(json);

console.log(jsonParseado.idade);
