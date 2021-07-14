// --- ### "closures" é a habilidade que a função tem de acessar seu escopo léxico ### ---

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Miguel');
console.log(funcao)
console.log(funcao2)

console.log(funcao(), funcao2())