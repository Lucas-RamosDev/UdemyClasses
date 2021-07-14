// Faça que a letra das variáveis fique igual ao comentario de cada variavel

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

let varTemp = varA // salva o valor de A

varA = varB
varB = varC
varC = varTemp


console.log(varA, varB, varC)