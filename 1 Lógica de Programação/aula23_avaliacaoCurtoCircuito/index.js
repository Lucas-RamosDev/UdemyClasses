/*

&& - false && true -> vai retornar "o valor falso"
|| - true || false -> vai retornar "o valor verdadeiro"

--- ### Valores 'FALSY' - que são avaliados como falso ### ---
-> false
-> 0
-> '' "" ``
-> null / undefined
-> NaN

Observaçoes: qualquer valor diferente desses mencionados acima são avaliados como 'TRUE"
*/

// EXEMPLO DE COMO FUNCIONA NA PRÁTICA

function falaOi (){
    return 'Oi'
}
const vaiExecutarTrue = 'Lucas'
const vaiExecutarFalse = 0

console.log(vaiExecutarTrue && falaOi()) // Se o valor for verdadeiro, sempre mostrará o ultimo valor
console.log('Lucas' && vaiExecutarFalse && falaOi()) // Se o valor for avaliado como falso, retorna o valor falso
// --------------------------------------

const corUsuario = null
console.log(corUsuario || 'Preto')
console.log(0 || false || null || 'Lucas' || true)// apresentará sempre o primeiro valor verdadeiro
