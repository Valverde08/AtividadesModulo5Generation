var lerValores = require('readline-sync')

const realCurrency = new Intl.NumberFormat(
        'pt-BR',{
            style:'currency',
            currency:'BRL'

        }
    )


let salario = lerValores.questionFloat('Digite o valor do seu salario:')

let abono = lerValores.questionFloat('Digite o valor do abono recebido:')

let salarioTotal = salario + abono

console.log(`O seu salário com o abono fica no valor total de : R$ ${realCurrency.format(salarioTotal)}`);


