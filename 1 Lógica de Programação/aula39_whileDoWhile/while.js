// WHILE / DO WHILE

let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

console.log('')
// ---------------------------------------------------
let indice = 0
const nome = 'Lucas'
while ( indice < nome.length) {
    console.log(nome[indice]);
    indice++;
}

// -----------------------------------------------------
function random(min, max) { // função para gerar numero aleatório de 1 a 50
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 50
let rand = random(min, max)

while (rand !== 10) { // enquanto não encontrar o numero 10 a repetição não para
    rand = random(min, max)
    console.log(rand)
}