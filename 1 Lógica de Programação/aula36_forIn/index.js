// - For In - Estrutura de Repetição

// - For in = Lê os índees ou chaves do objeto
const frutas = ['Pêra', 'Maçã', 'Uva']
for (let indice in frutas){
    console.log(frutas[indice])
}
console.log('')


const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Ramos',
    idade: 29
}
for (let chaves in pessoa){
    console.log(chaves, pessoa[chaves])
}