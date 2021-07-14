/* 
Retorne as pessoas que tem o nome com 5 letras ou mais
Retorne as pessoas com mais de 50 anos
Retorne as pessoas cujo nome termian com "A"
Retorne os dados do Luiz
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasIdosas = pessoas.filter(obj => obj.idade >= 50 );
const pessoasLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
const dadosLuiz = pessoas.filter(obj => obj.nome === 'Luiz')


//console.log(pessoasComNomeGrande)
//console.log(pessoasIdosas)
//console.log(dadosLuiz)
console.log(pessoasLetraA)