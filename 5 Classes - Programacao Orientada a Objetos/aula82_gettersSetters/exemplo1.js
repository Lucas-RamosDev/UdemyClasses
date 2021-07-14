// imagine o seguitne cenário, estamos criando um jogo de carro...

const _velocidade = Symbol('velocidade') // symbol gera id's aleatorios

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade] 
    }

    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0 ) return;
        this[_velocidade] = valor
    }

    botaoAcelerar(){
        if(this[_velocidade]  >= 100) return;
        this[_velocidade] ++;
    }

    botaoFreiar(){
        if(this[_velocidade]  <= 0) return;
        this[_velocidade] --;
    }
}

const carro1 = new Carro('Fusca')

for(let i = 0; i <= 200; i++) { //- este "For" foi feito para simular uma pessoa precionando o bota Acelerar 200x
    carro1.botaoAcelerar();
}

carro1.velocidade = 2000
console.log(carro1.velocidade)