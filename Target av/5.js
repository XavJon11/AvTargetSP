function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Exemplo de string a ser invertida
let minhaString = "Hello, world!";

// Chamada da função para inverter a string
let stringInvertida = inverterString(minhaString);

// Exibir a string invertida
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
