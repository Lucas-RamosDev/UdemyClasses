const pessoa1 = new Object();
pessoa1.nome = 'Lucas'
pessoa1.sobrenome = 'Ramos'
pessoa1.idade = 30
console.log(pessoa1)

pessoa1.falarNome = function() {
    return (`Meu nome é ${this.nome} ${pessoa1.sobrenome}`)
}
console.log(pessoa1.falarNome())

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    const dataNascimento = dataAtual.getFullYear() - this.idade
    return (`E nasci em ${dataNascimento}`)
}
console.log(pessoa1.getDataNascimento())