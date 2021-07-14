class Lapis {

    constructor(cor, marca, valor) {
        this.cor = cor
        this.marca = marca
        this.valor = valor
    }

    descricao(){
        console.log(`Este lápis é da marca ${this.marca}, da cor ${this.cor} e custa R$${this.valor}`)
    }

}

const lapisA = new Lapis('Branca', 'Faber Castel', 30.00)
const lapisB = new Lapis('Vermelha', 'Bic', 25.00)

console.log(lapisA.descricao())
console.log(lapisB.descricao())