// Factory functions (funções fábricas)

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Lucas', 'Ramos')
console.log(p1)
console.log(p1.nomeCompleto)