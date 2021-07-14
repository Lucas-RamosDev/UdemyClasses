// Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Lucas', 'Ramos')
const pessoa2 = new Pessoa('Bruna', 'Madureira')

console.dir(pessoa1)
console.dir(pessoa2)