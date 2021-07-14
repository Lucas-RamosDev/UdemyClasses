// --- ### PARAMETROS ### ---

// --- Utilizando "arguments"
function funcao() {
    console.log(arguments [1])
}
funcao('valor', 'number 1', 'number 2', 'number 3', 'number 4', 'number 5')

// --- A funçãoS defina com a palavra function tem uma variavel especial que chama "arguments" que sustenta todos os argumentos enviados
function funcaoS(a, b, c) {
    let total = 0;
    for(let argumento of arguments){
        total += argumento
    }

    console.log(total, a, b, c)
}
funcaoS(1, 2, 3, 4, 5)

// --- Quando não atribuir valor ele aparecerá "undefined"
 function funcaoA (a, b, c, d) {
    console.log(a, b, c, d)
 }
 funcaoA(1, 2, 3)

// --- Se não determinar "b" ele assumira o valor "2"

 function funcaoB(a, b = 2){
     console.log(a + b);
 }
 funcaoB(2)

// --- 'undefined' faz o javascript pular o valor de "b", assumindo o valor de "b = 2"

function funcaoC(a, b = 2, c = 4){
    console.log(a + b + c);
}
funcaoC(2, undefined, 20)

// --- utilizando restor operation "..." (resto dos valores que sobraram)
function conta(operador, acumulador, ...numeros) {
    //console.log(operador, acumulador, numeros)
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
    console.log(arguments); //- para ver os argumentos
}
conta('+', 1, 20, 30, 40, 50)