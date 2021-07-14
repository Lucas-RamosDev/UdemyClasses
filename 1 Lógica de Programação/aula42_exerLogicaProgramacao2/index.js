/*
-> Escreva uma função chamada "ePaisagem", 
que recebe dos argumentos, largura e altura de uma imagem (Number).
Retorne "true" se a imagem estiver no modo paisagem
*/
function ePaisagem(a, l){
    if( a > l ){
        return (`esta imagem é Retrato`)
    } else {
        return (` esta imagem é Paisagem`)
    }
}
const altura = 21.0
const largura = 29.7

const tipoImagem = ePaisagem(altura, largura)
console.log(tipoImagem)

// ---- #### Resolução do Professor #### ----

function ePaisagemP(largura, altura){
    return largura > altura
}
console.log(ePaisagemP(1920, 1080))

// ---- #### Arrow Function #### ----

const ePaisagemArrow = (largura, altura) => largura > altura;
console.log(ePaisagemArrow(1920, 1080))