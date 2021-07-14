//->...(spread) - neste exemplo utilizado para copiar o objeto (carro) 'reaproveitar-lo para criar outro carros'
const carro = {nome: 'HB20', preco: 30000.00}
const novoCarro = {
    ...carro, //...(spread)
    km: 10000
}

novoCarro.nome = 'Honda Civic'
novoCarro.preco = 60000.00

console.log(carro)
console.log(novoCarro)

//-> Object.assign(des, any) - Tambem utilizado para copiar o objeto
const arvore = {tipo: 'Goiabeira', preco:200.00}
const novaArvore = Object.assign({}, arvore, {idade: '1 ano'})

novaArvore.tipo = 'Jabuticabeira'
novaArvore.preco = 500.00

console.log(arvore)
console.log(novaArvore)

//-> Object.keys - retorna as chaves do objeto
const alunos = {nome: 'Lucas', sobrenome: 'Ramos', idade: 30}
console.log(Object.keys(alunos))

//-> Object.values - retorna os valores do objeto (em array)
const comida = {prato: 'macarrão', preco:'20.00'}
console.log(Object.values(comida))

//-> Object.entries - retorna as chaves e os valores (em array)
const tinta = {cor: 'verde', valor: 30.00, textura:'grama'}
console.log(Object.entries(tinta))

//-> Object.freeza - congela o objeto para que ele não seja alterado
const fruta = {nome: 'maçã', cor: 'vermelha'}
Object.freeze(fruta)
fruta.nome = 'pera'
console.log(fruta)

//-> Object.defineProperties (define várias propriedades) - foi visto na aula 71

//-> Object.defineProperty (define uma propriedade) - foi visto na aula 71

//-> Object.getOwnPropertyDescriptor(o, 'prop') - mostra as propriedades
const produtos = { nome: 'Caneca', preco: 1.80 }
console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'))

