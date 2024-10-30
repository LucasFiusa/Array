// var, let e const = variaveis
// variavel serve para armazenar

let nome = "Lucas";
// string é um tipo de dado textual
console.log(nome);

// array '[]' - colchetes
// array é uma variavel especial onde podemos armazenar uma lista de dados

let compras = [
    "Celular",
    "Miojo",
    "Pizza",
    "Coca",
    "Perfumes",
    "Carro",
    "Energético",
    "Café",
    "RTX 4090",
    "Looks para academia",
    "Pé treino"
];
// no array temos um indice, vai inicar do número 0
console.log(compras); // mostra toda a lista

console.log(compras[5]); // Carro

// numero é do tipo number
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// métodos de array
// forma de manipular dados

// adicionando numero 6 no array:
numeros.push(6);
// push() adiciona/empurra um dado no final do array

// adicionando o numero 0 no inicio:
numeros.unshift(0);
// unshift() adiciona ao inicio do array

// removendo o ultimo intem do array:
numeros.pop();
// pop() vai remover o ultimo item do array

console.log(numeros.join("-"))
// exibe todo array separado por '-'