/*
-> Escreva uma função que receba um número e retorne o seguinte:
* Número é divisivel por 3 = Fizz
* Número é divisível por 5 = Buzz
* Número é divisível por 3 e 5 = FizzBuzz
* Número NÃO é divisível por 3 e 5 = Retorna o próprio número
* Checar se o número é realmente um número = Se não for número, retornar o valor recebido
* Use a função com números de 0 a 100
*/


//                   function(valorA, valorB)
const resultVerificacao = verNumero(0, 100)

function verNumero(valorA, valorB) {

    for (let i = valorA; i <= valorB; i++){
        
        const numFizz = i % 3 === 0 // calculo para ver se é divisivel por 3
        const numBuzz = i % 5 === 0 // calculo para ver se é divisivel por 5

        if ( numFizz == true && numBuzz == true){
            const result ='FizzBuzz'
            console.log(i, result)

        } else if ( numBuzz == true) {
            const result = 'Buzz'
            console.log(i, result)

        } else if (numFizz == true){
            const result = 'Fizz'
            console.log(i, result)

        } else {
            console.log(i)

        }
    }
}

const num1 = 'lucas'
const num2 = 10
