// VALORES PRIMITIVOS (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
// VALORES PRIMITIVOS = valores copiados

let a = 'A'
let b = a // realiza um cópia.
console.log(a, b)

a = 'C'
console.log(a, b) // podemos perceber que mesmo altarando o valor de "a" o valor de "b" não altera
console.log('')

// REFERENCIAS (mutaveis) - array, abject, function
// VALORES REFERENCIAS = Passados por referencia

let numeros = [1, 2, 3]
let numerosCopia = numeros
console.log(numeros, numerosCopia)

numeros.push(4) 
console.log(numerosCopia, numerosCopia) // podemos observar que o valor 'numerosCopia' tambem altera

// --- ###  SALVANDO OS VALORES PRIMARIOS ### ---

const nomeA = {
    nome: 'Lucas',
    sobrenome: 'Ramos'
}

const nomeB = {...nomeA} // reserva as informações primarias da variavel 'nomeA'

nomeA.nome = 'Bruna'

console.log(nomeA) // podemos observar que alterou para 'bruna' a variavel 'nomeA'
console.log(nomeB)// e a Variavel 'nomeB' constinua com o valor primario