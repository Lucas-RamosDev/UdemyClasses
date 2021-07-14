// 1° passo - capturar evento do submit do formulário
const form = document.querySelector('#formulario');

// 2° passo - Corpo da função (onde será executado toda a tarefa)
form.addEventListener('submit', function (evento) { // evento = "event" ou "e"
    evento.preventDefault(); // interrompe o envio via HTML
    
    const inputPeso = evento.target.querySelector('#peso') // vai informar o elemento que esta recebendo o evento. Ex. se foi um click ele informa que foi um click, etc...
    const inputAltura = evento.target.querySelector('#altura') // ... seleciona o ID "altura"
    
    const peso = Number(inputPeso.value); // Captura o valor digitado e converte em números
    const altura = Number(inputAltura.value)
    //console.log(peso, altura) // se quiser ver o result no console

    if (!peso){ // se ("peso" for inválido) - ou seja, não for um número
        setResultado('Peso inválido', false)
        return // Vai parar aqui o código por conta do "return"
    }

    if (!altura){ // se ("altura" for inválido) - ou seja, não for um número
        setResultado('Altura inválido', false) // - este false foi acrescentado, para depois configurarmos o fundo vermelho
        return // Vai parar aqui o código por conta do "return"
    }

    const imc = getImc(peso, altura);//função para realizar o calculo do IMC
    const nivelImc = getNivelImc(imc) // função para identificar o nível do IMC

    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(mensagem, true) // Mostra a mensagem final

});


// 3° passo - Funções "auxiliares"
function getNivelImc(imc){ // Função para checar o nível de massa corporal
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] // Array - lista de strings

    // FORMULA "IF" SIMPLIFICADA
    if (imc >= 39.9) return nivel[5]; // por causa da formula ter apenas um linha, podemos fazer desta forma.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <  18.5) return nivel[0];

    /* - FORMULA "IF" COMPLETA
    if (imc >= 39.9) {
        return nivel[5];
    }

    if(imc >= 34.9) {
        return nivel[4];
    }

    if(imc >= 29.9) {
        return nivel[35];
    }

    if(imc >= 24.9) {
        return nivel[2];
    }

    if(imc >= 18.5) {
        return nivel[1];
    }

    if(imc < 18.5) {
        return nivel[0]
    }
    */
}


function getImc (peso, altura) { //função para realizar o calculo do IMC
    const imcCalc = peso / altura ** 2;
    return imcCalc.toFixed(2)// imc retornar com 2 casas decimais
}

function criaParagrafo (){ // função para criar parágrafo com JS
    const paragrafo = document.createElement('p'); // Cria um paragrafo no HTML "<p>" via javascript
    return paragrafo;
}

// 
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //Limpa o HTML do "resultado"
        
    const paragrafo = criaParagrafo()
    
    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado') //Modifica a classe pelo javascript
    } else {
        paragrafo.classList.add('incorreto')
    }
    
    paragrafo.innerHTML = (msg)
    resultado.appendChild(paragrafo)
}