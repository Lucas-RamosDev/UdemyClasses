// - For classico - Estrutura de Repetição

// 1° passo - definir a variável (i = 0)
// 2° passo - dizer onde quer parar a repetição (i <= 5)
// 3° passo - informar quanto será acrescentado na repetição (i++)

for (let i = 0; i <= 5; i++) { // obs: variavel i = index
 console.log(`Linha ${i}`)
}
console.log('')

for (let i = 0; i <= 50; i += 5) { // pula o resultado de 5 em 5
    console.log(`Linha ${i}`)
}
console.log('')

for (let i = 5; i >= 0; i--) { // contando de traz para frente
    console.log(`Linha ${i}`)
}
console.log('')

for (let i = 0; i <= 10; i++) { // verificando se o número é PAR
    const numeroPar = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, numeroPar);
}

//------------------------------------------------------------------
//                 0       1      2        3
const frutas = ['Maçã', 'Pêra', 'Uva', 'Abacaxi']

for (let i = 0; i < frutas.length; i++){ // frutas.lenth - mostra o tamanho do array
    console.log(`indice ${i}, ${frutas[i]}`)
}

