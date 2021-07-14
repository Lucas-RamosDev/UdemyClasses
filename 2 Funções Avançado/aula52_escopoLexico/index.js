// --- ### ESCOPO LÉXICO ### ---

// - Exemplo:
const nome = 'Lucas';

function falaNome() {
    console.log(nome);
}
falaNome()  // - Por mais que não foi declarado o argumento, 
            // por ser vizinho da variavel "nome" automaticamente 
            // ele atribui o valor no argumento, que neste caso é "lucas". 
            // Por isso chamamos esse exemplo de "escopo Léxico".

const nomeA = 'Lucas'
