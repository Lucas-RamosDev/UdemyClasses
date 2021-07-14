function saudacao(nome) {
    return(`Bom dia ${nome}`)
}
const variavel = saudacao('Lucas')
console.log(variavel)

//--- ### ### ---

function soma(x, y) {
    return(`A soma entre ${x} + ${y} é igual a ${x + y}`)
}
console.log(soma(3, 10)),
console.log(soma(2, 8))
console.log(soma(5, 6))

//--- ### FUNÇÃO TRAIBUINDO VALOR ### ---

function somaNumero( x=1, y=1){ // Se não definirmos nenhum valor p/ 'x e y' ele assume o valor '1'
return(`A soma entre ${x} + ${y} é igual a ${x + y}`)
}
console.log(somaNumero(5 ))

// --- ### FUNÇÃO ANÔNIMA ### ---

const raiz = function (n){
    return n ** 0.5
}
console.log(raiz(9))

// --- ARROW FUNCTION ---

const raizQuadrada = n => n ** 0.5
console.log(raizQuadrada(25))
