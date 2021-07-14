//- Indeces   ->    0       1       2       
const alunos = [ 'Luiz', 'Maria', 'João' ]

console.log(alunos) // exibir o array completo

console.log(alunos[1]) // exibir os nomes desejados
console.log(alunos[2]) // exibir os nomes desejados

alunos[0] = 'Eduardo' // Editar o nome desejado
alunos[3] = 'Lucas' // Adicionando mais um aluno (no indece 3 neste caso)
console.log(alunos)

console.log(alunos.length) // ver o tamanho do array

alunos.push('Bruna') // adiciona mais alunos no FINAL do array
alunos.unshift('Murilo') // adiciona mais alunos no INICIO do array
console.log(alunos)

alunos.pop() // remove o aluno do FINAL do array
alunos.shift() // remove o aluno no INICIO do array

const removido = alunos.pop() // para mostrar o aluno removido
console.log(removido)
console.log(alunos)

const salas = [ 'sala A', 'sala B', 'sala C' ]
delete salas[1] // deleta a "sala" do ÍNDECE 1, porem não perde o indece
console.log(salas)

//                0           1           2           3           4
const marcas = [ 'Ford', 'Mercedes', 'Ferrari', 'Chevrolet', 'Volkswagen']
console.log(marcas.slice(1, 3)) // mostra apenas os indeces desejados
console.log(marcas.slice(0, -2)) // mostra os indeces desejados de traz para frente

console.log(typeof marcas) // mostra o tipo - Array sempre será Objeto
console.log(marcas instanceof Array) // essas "Marcas" são instancia de array? se retornar true é array e false não é array
