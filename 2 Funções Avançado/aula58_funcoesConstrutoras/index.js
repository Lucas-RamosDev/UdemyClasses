// Função construtora -> constroe Objetos
// funções fabrica -> cria objetos
// funções construtora -> exemplo: Pessoa(new)

// --- ### FUNÇÃO CONSTRUTORA ### ---
function Pessoa(nome, sobrenome) {

    //this.nome = pessoa.nome
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    };
}

//-- new = cria um novo objeto fazio e faz o this aportar para a vairalvel
const p1 = new Pessoa('Lucas', 'Ramos');
const p2 = new Pessoa ('Bruna', 'Madureira');

console.log(p1)
p2.metodo()