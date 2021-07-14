// -- Do While

function random(min, max) { // função para gerar numero aleatório de 1 a 50
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 50
let rand = random(min, max)

do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);