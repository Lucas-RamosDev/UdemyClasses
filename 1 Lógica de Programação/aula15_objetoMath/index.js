let num1 = 9.44578

let arredBaixo = Math.floor(num1)   // arredondando para baixo
let arredCima = Math.ceil(num1)     // arredondando para cima
let arredAuto = Math.round(num1)    // arredondando Automaticamente

console.log(`Arredondando para baixo: ${arredBaixo}`)
console.log(`Arredondando para cima: ${arredCima}`)
console.log(`Arredondando automatico: ${arredAuto}`)

console.log(Math.max(1,2,3,4,5))    // mostra o maior número da sequencia
console.log(Math.min(1,2,3,4,5))    // mostra o menor número da sequencia

console.log(Math.random())          // gera um número aleatório

const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // estipula um numero aleatorio entre 5 e 10 e arredonda o mesmo
console.log(aleatorio)