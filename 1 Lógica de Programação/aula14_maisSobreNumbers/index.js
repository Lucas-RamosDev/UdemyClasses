let num1 = 1500
let num2 = 2.5
let num3 = 2.50578931
let temp = num1 * 'olá'

let num4 = 0.7
let num5 = 0.1

num4 += num5
num4 += num5
num4 += num5

num4 = Number(num4.toFixed(2)) // formula para arrumar imprecisão
//num4 = parseFloat(num4.toFixed(2)) // Ou pode usar esse que é a mesma coisa

console.log(num1.toString() + num2) // converte numero em string

console.log(num1.toString(2)) // ver a representação binária do número

console.log(num3.toFixed(2)) // arredondamento das casas decimais - o valor "2" representa qts casas dec. deseja

console.log(Number.isInteger(num1)) // ver se o numero é inteiro

console.log(Number.isNaN(temp)) // verifique se o result. da conta NÃO é um valor verdadeiro

console.log(num4)
console.log(Number.isInteger(num4))