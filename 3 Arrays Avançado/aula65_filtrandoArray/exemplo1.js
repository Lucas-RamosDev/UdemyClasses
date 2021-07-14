// --- Filter (Filtrando) - filtra o Array
// --- Filter sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// EXEMPLO 1: Explicando detalhado
function callbackFilter(valor, indece, array) {
    if(valor > 10){
        return true; // o filter sempre vai ler resultados boleanos (true / false)
    } else {
        return false;
    }
}

// EXEMPLO 2: Simplificada
function callbackFilter(valor, indece, array) { // neste exemplo como nao utiliza 'indece' nem 'array' se quiser pode tirar
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

// EXEMPLO 3: Função Anonima
const numerosFiltradosAnonimo = numeros.filter(function(valor){
    return valor > 20;
})
console.log(numerosFiltradosAnonimo)

// EXEMPLO 4: Arrow Function
const numerosFiltradosArrow = numeros.filter( valor => valor > 10)
console.log(numerosFiltradosArrow)

// EXEMPLO 5: mostrando as interação das expreçoes: valor, indice e array
const numerosFiltradosInteracao = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    
    return valor > 10;
})