// Para cada elemento:
// 1 - Retorne apenas uma string com o nome da pessoa
// 2 - Remova apenas a chave "nome" do objeto
// 3 - Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// ---> 1
const nomes = pessoas.map(obj => obj.nome)

// ---> 2

const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades)

/* --- ### outra maneira de fazer ### ---
const idade = pessoas.map(function(obj) {
    delete obj.nome
    return obj
})
console.log(idade)
*/

// ---> 3

const comIds = pessoas.map(function(obj, indice) {
    const novoObj = {...obj}; // faz uma cópia do objeto original
    novoObj.id = indice + 1
    return novoObj
})
console.log(comIds)


/* --- ### dessa forma ele mexe no objeto original ### ---
const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice + 1;
    return obj
})
console.log(comIds)
*/