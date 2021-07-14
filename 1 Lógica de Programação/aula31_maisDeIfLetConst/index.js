// - Mais diferenças entre VAR / LET / CONST
const verdadeira = true

// - Let tem escopo de bloco { ...bloco }
// - Var só tem escopo de função


// --- ### ESCOPO DE BLOCO ### ---
let nome = 'Lucas'
var nome2 = 'Bruna'

if ( verdadeira ) {
    let nome = 'João'
    var nome2 = 'Natacha'

    if ( verdadeira ){
        let nome = 'Esiquiel'
        var nome2 = 'Sueli'
    }
}
console.log(nome, nome2) // podemos observar que a diferença entre os dois é o escopo

// --- ### ESCOPO DE FUNÇÃO ### ---

var sobrenome = 'Ramos'

function falaOi(){
    console.log(sobrenome)
}

falaOi()




