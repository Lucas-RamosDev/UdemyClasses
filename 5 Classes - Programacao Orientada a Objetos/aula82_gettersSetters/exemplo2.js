class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        console.log('Getter')
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) {
        console.log('Setter')
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

const pessoa1 = new Pessoa('Lucas', 'Ramos')
pessoa1.nomeCompleto = 'Lucas Augusto Bruneli Ramos'

console.log(pessoa1.nomeCompleto)