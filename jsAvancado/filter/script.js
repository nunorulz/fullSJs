const clientes = [
  { name: 'Ana', lastname: 'da Silva', age: 14 },
  { name: 'Bruno', lastname: 'Rocha', age: 18 },
  { name: 'João', lastname: 'dos Anjos', age: 21 },
];

/* If ternário */
const clientesMaiores = clientes.filter(cliente =>{
  return cliente.age >= 18
})

// const clientesMaiores = clientes.filter((cliente) => {
//   let retorno = false;
//   if (cliente.name === 'Ana') {
//     retorno = true
//   }
//   return retorno;
// });

console.log(clientesMaiores);
