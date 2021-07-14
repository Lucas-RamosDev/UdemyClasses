// IIFE - Immediately invoked function expression (funções imediatas)

(function(idade, peso, altura) {

    const sobrenome = 'Ramos';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(29, 79, 1.75);