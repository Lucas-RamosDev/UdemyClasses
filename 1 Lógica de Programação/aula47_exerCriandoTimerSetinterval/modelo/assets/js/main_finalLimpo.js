
function relogio(){ // Adendo: Foi criado a função relógio para envolver todo o código, evitando escopo global.

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000)// O javascript sempre recebe em milésimos de segundo, por isso tem que multiplicar por 1.000 para dar certo

        return data.toLocaleTimeString('pt-BR', { // formatação para pegar apenas as horas
            hour12:false, // converte para 24h
            timeZone: 'GMT' // para zerar a hora
        })

    }

    // --- ### SINCRONIZAÇÃO COM O HTML - Enviar os comandos ### ---

    const relogio = document.querySelector('.relogio'); // seleciona a classe "relógio"

    let segundos = 0;
    let timer;
    function iniciaRelogio(){
        timer = setInterval(function(){ // timer = "let timer" que esta fora da função
            segundos++ // segundas = "let segundos" que esta fora da função
            relogio.innerHTML = criaHoraDosSegundos(segundos) // mostra o resultado no HTML
        }, 1000)
    }

    document.addEventListener('click', function(e){
        const elemento = e.target

        if(elemento.classList.contains('iniciar')){
            console.log('Você clicou em iniciar!')

            relogio.classList.remove('pausado') // remove a clase pausado (css)
            clearInterval(timer);
            iniciaRelogio()
        }

        if(elemento.classList.contains('pausar')){
            console.log('Você clicou em pausar!')

            relogio.classList.add('pausado') // adiciona a clase pausado (css)
            clearInterval(timer); // pausa o relógio
        }


        if(elemento.classList.contains('zerar')){
            console.log('Você clicou em zerar!')

            relogio.classList.remove('pausado') // remove a clase pausado (css)
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0
        }

    });
}
relogio()
