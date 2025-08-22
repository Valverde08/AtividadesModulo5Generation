var lerValores = require('readline-sync')

const realCurrency = new Intl.NumberFormat(
        'pt-BR',{
            style:'currency',
            currency:'BRL'

        }
    )


let salarioBruto = lerValores.questionFloat('Digite o valor do seu salário bruto: ')

let adicionalNoturno = lerValores.questionFloat('Digite o valor do seu adicional noturno: ')

let horasExtras = lerValores.questionFloat('Digite o valor pago para suas horas extras:')

let descontos = lerValores.questionFloat('Digite o valor dos descontos que aconteceram no seu salário:')


let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5 ) - descontos

console.log(` O valor do seu salário líquido é de ${realCurrency.format(salarioLiquido)}`);
