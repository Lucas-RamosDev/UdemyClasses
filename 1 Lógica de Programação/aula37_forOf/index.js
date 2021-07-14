// FOR OF

const nome = ['Lucas', 'Augusto', 'Ramos']

for (let i = 0; i < nome.length; i++){ // for - classico
    console.log(nome[i])
}

console.log('####')

for (let i in nome) { // for - in
    console.log(nome[i])
}

console.log('####')

for (let valor of nome) { // for - of
    console.log(valor)
}

console.log('####')

nome.forEach(function(valor, indice){ // for - each
    console.log(valor, indice)
})

// For Clássico - Gerlamente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)