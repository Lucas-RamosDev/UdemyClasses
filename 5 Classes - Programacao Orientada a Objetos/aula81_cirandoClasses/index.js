
// --- ### CLASSES ### ---
// - As classes são identicas as funções contrutoras...

class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar() {  // - métodos
        console.log(`${this.nome} esta falando`)
    }

    comer() { // - métodos
        console.log(`${this.nome} esta comendo`)
    }

    beber() { // - métodos
        console.log(`${this.nome} esta bebendo`)
    }

}

const p1 = new Pessoa('Luiz', 'Ramos')
const p2 = new Pessoa('Bruna', 'Madureira')
const p3 = new Pessoa('Miguel', 'Ramos')
const p4 = new Pessoa('João', 'Bruneli')

console.log(p1.comer())
console.log(p2.beber())
console.log(p3.comer())
console.log(p4.falar())


// --- ### REALIZANDO OS MESMOS PROCESSOS COM A "FUNÇÃO CONSTRUTORA" (PARA COMPARAR) ### --- 

function Carro(nome, marca) {
    this.nome = nome
    this.marca = marca
}

Carro.prototype.comprar = function() {
    console.log(`O carro ${this.nome} da marca ${this.marca} está sendo comprado.`)
};

Carro.prototype.vender = function() {
    console.log(`O carro ${this.nome} da marca ${this.marca} está sendo vendido.`)
};

Carro.prototype.alugar = function() {
    console.log(`O carro ${this.nome} da marca ${this.marca} está sendo alugado.`)
};


const carro1 = new Carro('HB20', 'Hyundai')
const carro2 = new Carro('Onix', 'Chevrolet')
const carro3 = new Carro('Golf', 'Wolkswagen')

console.log(carro1.comprar())
console.log(carro2.vender())
console.log(carro3.alugar())