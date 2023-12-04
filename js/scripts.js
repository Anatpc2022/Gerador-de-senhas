// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordButton = document.querySelector("#generated-password");

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
    const symbols = "(){}[]=<>/,.!@#$%¨&*-+`~^?;:"
    return symbols[Math.floor(Math.random() * symbols.length)];
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
    console.log ("teste");
});