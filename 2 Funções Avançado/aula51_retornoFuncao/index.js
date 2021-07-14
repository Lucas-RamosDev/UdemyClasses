
// --- ### Diferença entre "return" e "console.log" ### ---

// -> o "return" apresenta o resultado no console do navegador
function somaA(a, b) {
    return a + b;
}

// -> O "console.log()" exibe apenas o resultado no console
function somaB(a, b) {
    console.log(a + b);
}
somaB(5, 2);

// ---------------------------------------------------------------------

function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(2));
console.log(quadriplica(3));
