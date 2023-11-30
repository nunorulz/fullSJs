let formulario = document.querySelector('#formCadastro');

formulario.onsubmit = function (event) {
  event.preventDefault();

  let temErro = false

  let inputNome = document.forms['formCadastro']['nome'];
  if (!inputNome.value) {
    temErro = true
    inputNome.classList.add('inputError');

    let span = inputNome.nextSibling.nextSibling; 
    span.innerText = "Digite o nome corretamente";
  } else {
    inputNome.classList.remove('inputError');

    let span = inputNome.nextSibling.nextSibling; 
    span.innerText = '';
  }

  let inputMail = document.forms['formCadastro']['email'];
  if (!inputMail.value) {
    temErro = true
    inputMail.classList.add('inputError');

    let span = inputMail.nextSibling.nextSibling; 
    span.innerText = "Digite seu e-mail corretamente";
  } else {
    inputMail.classList.remove('inputError');

    let span = inputMail.nextSibling.nextSibling; 
    span.innerText = '';
  }

  let selectCidade = document.forms['formCadastro']['cidade'];
  if (!selectCidade.value) {
    temErro = true
    selectCidade.classList.add('inputError');

    let span = selectCidade.nextSibling.nextSibling; 
    span.innerText = "Selecione uma cidade";
  } else {
    selectCidade.classList.remove('inputError');

    let span = selectCidade.nextSibling.nextSibling; 
    span.innerText = '';
  }

  if (!temErro){
  formulario.submit()
}
  
};
