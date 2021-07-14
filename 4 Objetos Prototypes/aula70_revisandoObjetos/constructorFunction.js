// Constructor Function (funções construtoras)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    Object.freeze(this) // não deixa eu alterar nada dentro do objeto
}

const p1 = new Pessoa('Lucas', 'Ramos')
delete p1.nome // comente a função -> "Object.freeze(this)" para ver a diferença

const p2 = new Pessoa('Bruna', 'Madureira')

console.log(p1)
console.log(p2)