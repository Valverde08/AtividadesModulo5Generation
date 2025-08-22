var lerValores = require('readline-sync')


let num1 = lerValores.questionFloat("Digite a sua primeira nota:")

let num2 = lerValores.questionFloat("Digite a sua segunda nota:")

let num3 = lerValores.questionFloat("Digite a sua terceira nota:")

let num4 = lerValores.questionFloat("Digite a sua quarta nota:")


let mediaFinal =  (num1 + num2 + num3 + num4) / 4


console.log(`A sua média final é de : ${mediaFinal.toFixed(2)}`);

