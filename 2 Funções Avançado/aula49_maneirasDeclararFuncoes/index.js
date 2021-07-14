// ----- #################################### -----
// ----- ### MANEIRAS DE DECLARAR FUNÇÕES ### -----
// ----- #################################### -----

//---> Declaração de função (function hoisting)

falaOi()
function falaOi(){
    console.log('Oi')
}

//---> Function Expression
const souUmDado = function() {
    console.log('Sou um dado.')
}
souUmDado()

function executaFuncao(funcao) {
    funcao()
}
executaFuncao(souUmDado)

// ---> Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function')
}
funcaoArrow()

// ---> Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...')
    }
}
obj.falar()