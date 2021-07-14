// --- ### Factory Function (função fábrica) ### ---

function criaPessoa(nome, sobrenome, altura, peso) {

    return {
        nome,
        sobrenome,

        //- Getter
        get nomeCompleto() { //- Getter = "get" faz que o "imc" finja ser um atributo da classe
            return `${this.nome} ${this.sobrenome}`
        },

        //- Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // cada espaço o nome será dividido e devolver um array
            this.nome = valor.shift() // "shift" adc o primeiro nome na variavel nome e remove do array
            this.sobrenome = valor.join(' ') // "join" juntar o resto em uma string separado por espaço
            console.log(valor)
        },

        fala(assunto = 'falando sobre JS') {
            return `${this.nome} ${sobrenome} está ${assunto}`
        },

        altura,
        peso,

        get imc(){ //- Getter = "get" faz que o "imc" finja ser um atributo da classe
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    }

}

const p1 = criaPessoa('Lucas', 'Bruneli', 1.75, 79)
console.log(p1.imc)

p1.nomeCompleto = 'Bruna Madureira Ramos'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
console.log(p1.fala())