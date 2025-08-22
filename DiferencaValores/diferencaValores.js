var lerValores = require('readline-sync')


let num1 = lerValores.questionFloat("Digite o seu primeiro valor:")

let num2 = lerValores.questionFloat("Digite o seu segundo valor:")

let num3 = lerValores.questionFloat("Digite o seu terceiro valor:")

let num4 = lerValores.questionFloat("Digite o seu quarto valor:")

let resDiferenca = (num1 * num2) - (num3 * num4)

console.log(`A diferença entre os valores do produto é de :${resDiferenca.toFixed(2)}`);
