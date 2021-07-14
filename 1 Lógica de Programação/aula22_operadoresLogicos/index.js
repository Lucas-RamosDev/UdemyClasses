/*
### OPERADORES LÓGICOS ###

&& -> AND -> E -> todas as expressões precisam ser true para retornar true
|| -> OR -> OU -> se uma expressão for 'true' resultara em true
! -> NOT -> NÃO -> inverte uma expressão
*/

//const expressaoAnd = true && true && true
const usuario = 'Lucas'
const senha = '123456'
const logar = usuario === 'Lucas' && senha === '123456'
console.log(logar)

const expressaoOr = false || true || false
console.log(expressaoOr)

console.log(!true) // invertendo expressão