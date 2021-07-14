// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2;

});
console.log(numerosEmDobro)

// convertendo em arrow function

const notas = [8, 2, 5, 7, 10];

const somaNotas = notas.map(valor => valor + 2);

console.log(somaNotas)
