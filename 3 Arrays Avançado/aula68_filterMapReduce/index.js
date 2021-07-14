// Retorne a soma do dobro de todos os pares
// -> Filtar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(function(valor){ 
    return valor % 2 === 0;
    // resultado -> [ 50, 80, 2, 4, 8, 22 ] pares
}).map(function(valor) {
    return valor * 2
    // resultado -> [ 100, 160, 4, 8, 16, 44 ] dobro
}).reduce(function(acumulador, valor) {
    return acumulador + valor;
    // resultado -> [ 332 ] soma total
});
console.log(`Soma total dos valores Pares ${numerosPares}`)

// ---- ################# ----
// Retorne a soma do dobro de todos os impares (Arrow function)
// -> Filtrar impares
// -> Triplicar os valores
// -> Reduzir (somar tudo)

const numerosImpares = numeros
    .filter( valor => valor % 2 !== 0)
    .map( valor => valor * 3)
    .reduce((acumulador, valor) => acumulador + valor );
console.log(`Soma total dos valores Impares ${numerosImpares}`)

// resultado -> [ 5,  1,  3,  5, 7, 11, 15, 27 ] impares
// resultado -> [ 15,  3,  9, 15, 21, 33, 45, 81 ] triplicados
// resultado -> [ 222 ] soma total