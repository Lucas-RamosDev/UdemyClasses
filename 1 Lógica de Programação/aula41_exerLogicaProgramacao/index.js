// Escreva uma função que recebe 2 números e retorne o maior deles

// ---- #### Maneira normal de fazer #### ----
function max(x,y) {

    if(x > y){
        return x;
    } else {
        return y;
    }
}
const maior = max(20, 10)
console.log(`Maneira comum - ${maior}`)

 // ---- ### Maneira reduzida de fazer ### ----
 function maxReduce(x,y) {
     return x > y ? x : y // se x maior que y, retornar x senão retornar y
 }
console.log(`Maneira Reduzida - ${maxReduce(50, 30)}`)

// ---- #### ARROW FUNCTION #### ----

const maxArrow = (x, y) => {
    return x > y ? x : y;
}
console.log(`Maneira Arrow Function - ${maxArrow(5, 10)}`)

// ---- #### ARROW FUNCTION REDUZIDO #### ----

const maxArrowReduce = (x, y) => x > y ? x : y;
console.log(`Maneira Arrow Function Reduzida - ${maxArrowReduce(50, 100)}`)