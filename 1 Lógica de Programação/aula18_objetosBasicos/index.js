// --- ### CRIANDO OBJETOS ### ----

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Ramos',
    idade: 29
}

console.log(pessoa.nome)
console.log(pessoa.idade)

// --- ### FUNÇÃO COM OBJETO ### ---

function criaPessoa (nome, sobrenome, idade) { // - Função
    return { 
        nome: nome, // - Objeto
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa ('Lucas', 'Ramos', 29 )
const pessoa2 = criaPessoa ('Bruna', 'Ramos', 24 )
const pessoa3 = criaPessoa ('Miguel', 'Ramos', 1)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)

// --- ### UTILIZANDO 'THIS' ### ---

const carro = {
    marca: 'Ford',
    modelo: 'escort',
    ano: 1989,

    mostrar() {
        console.log(`Seu carro é um ${this.modelo} da marca ${this.marca} do ano ${this.ano}`)
    },
    incrementaAno(){
        this.ano++ // incrementa mais um ano
    }
}

carro.mostrar()
carro.incrementaAno()
carro.mostrar()
carro.incrementaAno()
carro.mostrar()