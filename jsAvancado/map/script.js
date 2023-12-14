const clientes = [
  { name: 'Ana', lastname: 'da Silva' },
  { name: 'Bruno', lastname: 'Rocha' },
  { name: 'João', lastname: 'dos Anjos' },
];

let clientesFinal = [];
clientes.forEach(function (cliente) {
  clientesFinal.push(cliente.name + ' ' + cliente.lastname);
});
console.log(clientesFinal);

/* Uso do MAP */
 const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)
 console.log(clientesFinalMap)
