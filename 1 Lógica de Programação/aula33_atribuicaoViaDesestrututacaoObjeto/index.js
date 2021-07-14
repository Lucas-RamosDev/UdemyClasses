// Atribuição via desestruturação - Objeto

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Ramos',
    idade: 29,
    endereco: {
        rua: 'Anésio Grando',
        numero: 320
    }
}

// --- ### Atribuição via desestruturação ### ---
//const { nome, sobrenome, idade, tamanho = 1.75 } = pessoa
//console.log(nome, sobrenome, tamanho)

// --- ### Substituindo o "nome" para "ultNome" da variável ### ---
//const { nome: ultNome, sobrenome, idade } = pessoa
//console.log(ultNome, sobrenome, idade)

// --- ### Pegando valores de Objeto dentro de Objeto ### ---
const {endereco: { rua, numero }, endereco } = pessoa
console.log(rua, numero)
console.log(endereco)

// --- ### Pegando resto dos valores ### ---
//const {nome, ...resto} = pessoa // mostra todos os valores menos o nome
//console.log(resto)