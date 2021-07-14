// ? :

//EXEMPLO: Se o usuário tiver maior ou igual a 1000 pontos ele é um usuário VIP

// Normalmente faríamos assim:
const pontuacao = 999;

if (pontuacao >= 1000){
    console.log('Usuário VIP')
} else {
    console.log('Usuário Normal')
}
// ------------------------------------------------------------------------
// utilizando OPERAÇÃO TERNARIO fica assim:
const pontuacaoUsuario = 1000;
// (condição) ? 'Valor para verdadeiro : 'Valor para falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = 'Branca'
const corPadrão = corUsuario || 'Preta'
console.log(nivelUsuario, corPadrão)

