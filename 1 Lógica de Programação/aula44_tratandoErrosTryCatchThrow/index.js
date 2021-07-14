// --- ### Try Catch ### ---
/*
try{ // tente executar esse comando caso de algum erro, va para outro bloco
    console.log(naoExisto)
} catch(err) {
    console.log('naoExisto não existe.')
    //console.log(err)
}
*/
// --------------------

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y
}

try{
console.log(soma(1, 2))
console.log(soma('1', 2))
} catch(error) {
    console.log(error)
    console.log('Alguma coisa mais amigavel para o usuario')
}