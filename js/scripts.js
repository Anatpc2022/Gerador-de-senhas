// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

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

  //Tamanho da senha
  const passwordLength = 10;

  //Lista de opções para a senha
  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];
  for (i = 0; i < passwordLength; i = i + 4) {
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
