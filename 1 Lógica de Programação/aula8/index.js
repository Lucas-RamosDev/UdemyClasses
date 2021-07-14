/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg 
tem 1.8 de altura e seu IMC é de 25.92
Luiz Otávio nasceu em 1990
*/

const nome = 'Lucas Augusto'
const sobreNome = 'Ramos'
const idade = 30
const peso = 84
const altura = 1.80
let indeceMassaCorporal 
let anoNascimento

indeceMassaCorporal = peso / (altura * altura)
anoNascimento = 2020 - idade

console.log(nome + ' ' + sobreNome +' tem ' + idade + ' anos, pesa ' + peso + ' kg' ) // Exemplo 1
console.log(`tem ${altura} de altura e seu IMC é de ${indeceMassaCorporal}`) // template string - Exemplo 2
console.log(nome, sobreNome, 'nasceu em', anoNascimento,'.') // Exemplo 3