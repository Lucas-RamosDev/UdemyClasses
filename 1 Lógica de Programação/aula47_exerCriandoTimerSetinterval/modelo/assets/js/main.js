
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

    /* -- Essa função não precisa mais por causa do "addEventLestener" no qual ja faz essa função
    const iniciar = document.querySelector('.iniciar'); // seleciona a classe "iniciar"
    const pausar = document.querySelector('.pausar');   // seleciona a classe "pausar"
    const zerar = document.querySelector('.zerar');     // seleciona a classe "zerar"
    */

    let segundos = 0;
    let timer;
    function iniciaRelogio(){
        timer = setInterval(function(){ // timer = "let timer" que esta fora da função
            segundos++ // segundas = "let segundos" que esta fora da função
            relogio.innerHTML = criaHoraDosSegundos(segundos) // mostra o resultado no HTML
        }, 1000)
    }

    document.addEventListener('click', function(e){
        //console.log(e.target); // target = elemento no qual esta sendo clicado
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

    // --- ### OUTRO EXEMPLO DE SINCRONIZAR ### ---

    /*
    iniciar.addEventListener('click', function(event) { // pega o evento de clicar no botão "iniciar"

        //relogio.innerHTML = 'cliquei no iniciar' // mostra o resultado no HTML
        relogio.classList.remove('pausado') // remove a clase pausado (css)
        clearInterval(timer);
        iniciaRelogio()

    });

    pausar.addEventListener('click', function(event) { // pega o evento de clicar no botão "pausar"
        
        //relogio.innerHTML = 'cliquei no pausar' // mostra o resultado no HTML
        relogio.classList.add('pausado') // adiciona a clase pausado (css)
        clearInterval(timer); // pausa o relógio
    });

    zerar.addEventListener('click', function(event) { // pega o evento de clicar no botão "zerar"
        
        //relogio.innerHTML = 'cliquei no zerar' // mostra o resultado no HTML
        relogio.classList.remove('pausado') // remove a clase pausado (css)
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
    });
    */
}
relogio()
