// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Novas Funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

//Funções
//Letras
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
//Números
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};
//Símbolos
const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%¨&*-+`~^?;:";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
//Unir todas as funções acima
const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  //A senha  começa vazia
  let password = "";

  //Segunda Versão
  //Tamanho da senha
  const passwordLength = +lengthInput.value;

  //Lista de opções para a senha
  const generators = [];

  if(lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }
  if(numbersInput.checked) {
    generators.push(getNumber);
  }
  if(symbolsInput.checked) {
    generators.push(getSymbol);
  }

  console.log(generators.length);

  if (generators.length === 0) {
    return;
  }
 

  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  password = password.slice(0, passwordLength);
  
  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});
