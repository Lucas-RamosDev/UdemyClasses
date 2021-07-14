const numero = 12

if ( numero >= 0 && numero <= 5){
    console.log('O número está entre 0 e 5')
} else if ( numero >= 6 && numero <= 10){
    console.log('O número está entre 6 e 10')

} else if ( 1 === 1) { // neste caso acontece que quando chega no primeiro valor verdadeiro o código para
    console.log('LITERAL')    

} else if ( numero >= 11 && numero <= 15){// verdadeiro
    console.log('O número está entre 11 e 15')
} else {
    console.log('O número NÃO esta entre 0 e 15')
}

console.log('Aqui vai o resto do código...')