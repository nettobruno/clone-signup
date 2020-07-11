let inputName = document.querySelector("#name");
let firstNameTxt = document.querySelector("#firstNameTxt");

let inputLastName = document.querySelector("#lastName");
let lastNameTxt = document.querySelector("#lastNameTxt");

let inputEmail = document.querySelector("#email");
let emailTxt = document.querySelector("#emailTxt");

let inputPassword = document.querySelector("#password");
let passwordTxt = document.querySelector("#passwordTxt");

let button = document.querySelector("button");

button.addEventListener('click', function(e) {
  e.preventDefault();

  // Validação do Nome
  if(inputName.value.length < 3) {
    firstNameTxt.classList.remove('visible');
  }
  else {
    firstNameTxt.classList.add('visible');
  }

  // Validação do Sobrenome
  if(inputLastName.value.length < 3) {
    lastNameTxt.classList.remove('visible');
  }
  else {
    lastNameTxt.classList.add('visible');
  }

  // Validação de email
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if(!regex.test(inputEmail.value)) {
    emailTxt.classList.remove('visible');
  }
  else {
    emailTxt.classList.add('visible');
  }

  // Validação da Senha
  if(inputPassword.value.length < 5) {
    passwordTxt.classList.remove('visible');
  }
  else {
    passwordTxt.classList.add('visible');
  }
})