//alert('Com a nossa mensagem.')

//window.confirm('Deseja realmente apagar?')

//window.prompt('Digite o seu nome')

// -- exercicio: pedir para o usuario digitar 2 valores, somar esses dois valores e mostrar o resultado da soma.

const primeiroValor = window.prompt('Digite o primeiro valor:')
const segundoValor = window.prompt('Digite o segundo valor:')

const resultado = Number(primeiroValor) + Number(segundoValor)

alert(`O resultado da soma entre ${primeiroValor} e ${segundoValor} é igual a ${resultado}`)


// ### outra maneira de fazer ###
/*
let primeiroValor = window.prompt('Digite o primeiro valor:')
let segundoValor = window.prompt('Digite o segundo valor:')

primeiroValor = Number(primeiroValor)
segundoValor = Number(segundoValor)

alert(`O resultado da soma entre ${primeiroValor} e ${segundoValor} é igual a ${primeiroValor + segundoValor}`)
*/