// 1 - Some todos os números (reduce)
// 2 - Retorne um array com os valores pares (obs: é recomendavel fazer com "filter")
// 3 - Retorne um array com o dobro dos valores (obs: é recomendavel fazer com "map")

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// ---> 1
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    //console.log( acumulador, valor)
    return acumulador
}, 0);
console.log(total)

// ---> 2
const valorPar = numeros.reduce(function(acumulador, valor) {
    if( valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []);
console.log(valorPar)

// ---> 3
const valorDobrado = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador
}, []);
console.log(valorDobrado)