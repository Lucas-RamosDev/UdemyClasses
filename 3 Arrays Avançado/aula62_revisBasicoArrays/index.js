// --- ### ARRAY LITERAL ### ---
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes)
nomes[1] = 'Joao'
delete nomes [2]
console.log(nomes)

// --- ### ARRAY COM FUNÇÕES CONSTRUTORAS --- ###
//                         0        1         2
const carros = new Array('HB20', 'Escort', 'Civic');
carros[2] = 'Ferrari'
console.log(carros)

// --- ### VALORES POR REFERENCIA ### ---
const frutas = ['pera', 'uva', 'maçã'];
const novo = [...frutas]; // usando o '...' é como se fize-se uma cópia da função, não afentando a original

novo.pop() //remove elementos
console.log(frutas)
console.log(novo)
console.log('')

// --- ### RELEMBRANDO FUNÇÕES DO ARRAY ### ---
const nomes2 = ['Lucas', 'Bruna', 'Miguel']
console.log(nomes2.length)

const removido = nomes2.pop(); // quando vc atribui o pop a uma variavel, vc consegue capturar o nome de quem foi removido
console.log(nomes2, removido) // mostra o array e quem foi removido do array

const removInicio = nomes2.shift() // remove do começo desclocando para outra casa
console.log(removInicio, nomes2)

const adicionar = nomes2.push('Sueli'); // adiciona elemento no final do array
console.log(nomes2)

const adicionarInicio = nomes2.unshift('Esiquiel'); // adiciona elemento no final do array
console.log(nomes2)
console.log('')

// --- ### FATIANDO O ELEMENTO ### ---
//                  0           1           2          3        4
const legumes = ['pepino', 'cenoura', 'beterraba', 'tomate', 'batata']
console.log(legumes)

const legumesNovo = legumes.slice(1, 3) // removo os elementos que deseja por um intervalo
console.log(legumesNovo)
console.log('')

// --- ### TRANSFORMANDO STRING PARA ARRAY ### ---
const cidade = 'Santo Antonio da Platina';
console.log(cidade)

const cidadeArray = cidade.split(' ')// neste caso o '.split' separa os valores por espaço 
console.log(cidadeArray)
console.log('')

// --- ### SEPARANDO STRING NUMERICO PARA ARRAY ### ---
const cpf = '40283057807'
const cpfArray = Array.from(cpf);
console.log(cpfArray)

// --- ### TRANSFORMANDO ARRAY PARA STRING ### ---
const listaCompras = ['arroz', 'feijao', 'farinha', 'carne']
console.log(listaCompras)

const listaCompraString = listaCompras.join(', ');
console.log(listaCompraString)