// 705.484.450-52 | 070.987.720-03
/*
       7x 0x 5x 4x 8x 4x 4x 5x 0x
(1) -> 10 9  8  7  6  5  4  3  2
(2) -> 70 0  40 28 48 20 16 15 0 = 237 -> (3)
(4) -> 11 - (237 % 11) = 5 (primeiro dígito)
(5) -> Se o número digito for maior que 9, consideramos 0

(6) -> 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
(7) -> 11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo dígito)
Se o número digito for maior que 9, consideramos 0
*/

const cpfOriginal = '705.484.450-52'
const cpfOriginalLimpo = cpfOriginal.replace(/\D+/g, '')

let cpf = '705.484.450';
let cpfLimpo = cpf.replace(/\D+/g, ''); // .replace(/\D+/g, '') -> faz com que todos caracteres que não seja númericos seja substituido por nada

const cpfArray = Array.from(cpfLimpo); // separando CPF (string) e transformando em Array
//console.log(cpfArray) //-> (1)

const multiplicacao = cpfArray.reduce(function(acumulador, valor, indice) {
    if (indice === 0) { acumulador.push(valor * 10)}
    if (indice === 1) { acumulador.push(valor * 9) }
    if (indice === 2) { acumulador.push(valor * 8) }
    if (indice === 3) { acumulador.push(valor * 7) }
    if (indice === 4) { acumulador.push(valor * 6) }
    if (indice === 5) { acumulador.push(valor * 5) }
    if (indice === 6) { acumulador.push(valor * 4) }
    if (indice === 7) { acumulador.push(valor * 3) }
    if (indice === 8) { acumulador.push(valor * 2) }
    return acumulador
}, [])
//console.log(multiplicacao) //-> (2)

const total = multiplicacao.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador
}, 0);
//console.log(total) //-> (3)

const primeiroDigito = 11 - (total % 11)
//console.log(primeiroDigito) //-> (4)

function verificaDigito(valor){
    let verificador = valor
    let verificadorFinal
    if (verificador > 9) { verificadorFinal = 0} else {verificadorFinal = valor}
    return verificadorFinal
}
//console.log(verificaDigito(primeiroDigito)) //-> (5)

const primeiroDigitoString = primeiroDigito.toString()

// -------- # SEGUNDA PARTE (SEGUNDO DIGITO) # ------

cpfArray.splice(cpfArray.length, 0, primeiroDigitoString); // adicinando o primeiro digito no array
//console.log(cpfArray) //-> (6)

const multiplicacao2 = cpfArray.reduce(function(acumulador, valor, indice) {
    if (indice === 0) { acumulador.push(valor * 11)}
    if (indice === 1) { acumulador.push(valor * 10)}
    if (indice === 2) { acumulador.push(valor * 9) }
    if (indice === 3) { acumulador.push(valor * 8) }
    if (indice === 4) { acumulador.push(valor * 7) }
    if (indice === 5) { acumulador.push(valor * 6) }
    if (indice === 6) { acumulador.push(valor * 5) }
    if (indice === 7) { acumulador.push(valor * 4) }
    if (indice === 8) { acumulador.push(valor * 3) }
    if (indice === 9) { acumulador.push(valor * 2) }
    return acumulador
}, [])

//console.log(multiplicacao2)

const total2 = multiplicacao2.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador
}, 0);
//console.log(total2)

const segundoDigito = 11 - (total2 % 11)
//console.log(segundoDigito)

const segundoDigitoString = segundoDigito.toString()

cpfArray.splice(cpfArray.length, 0, segundoDigitoString);

const cpfFinal = cpfArray.join('')

console.log(cpfFinal)
console.log(cpfOriginalLimpo)

if (cpfFinal == cpfOriginalLimpo){
    console.log('Seu cpf esta correto')
} else {
    console.log('Seu cpf esta incorreto')
}

