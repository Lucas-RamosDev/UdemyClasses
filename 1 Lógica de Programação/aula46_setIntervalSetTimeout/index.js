function mostraHora() {

    let data = new Date();
  
    return data.toLocaleTimeString('pt-BR', { //- formato brasileiro
        hour12: false //- converte a hora para 24 horas
    });
}

const timer = setInterval(function(){ // função - mostra a hora de segundo em segundo
    console.log(mostraHora());
}, 1000)


setTimeout(function() { //- para de contra após 3 segundos
    clearInterval(timer)
}, 3000);


setTimeout(function() { // após 5 segundos diz "Olá Mundo :)"
    console.log('Olá Mundo :)')
}, 5000);