// Atribuição via desestruturação - Array

// --- ### Exemplo 01 ### ---
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letrasEx = [b, c, a];
[a, b, c] = letrasEx;

console.log(a, b, c);

// --- ### Exemplo 02 ### ---

// -------------  0    1    2    3    4    5    6    7    8  // -- indeces
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]// -- valores

const [primeiroNumero, segundoNumero] = numeros // - pega o primeiro e segundo valor
console.log(primeiroNumero, segundoNumero)

const [priNumero, segNumero, terNumero, ...resto] = numeros // - pega o resto dos números
console.log(resto)

const [um, , tres, , cinco, , sete] = numeros // - com os espaços em branco você pode pular os valores em questão
console.log(um, tres, cinco)

// -----------------------------------------------------
//                      0                1                2
//                 0    1    2      0    1    2      0    1    2
const letras = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ]

const [,[,,letraF]] = letras
console.log(`Será mostrado a letra ${letraF}`)

const [lista1, lista2, lista3] = letras
console.log(lista3)
console.log(`Será mostra a letra ${lista3[2]}`)