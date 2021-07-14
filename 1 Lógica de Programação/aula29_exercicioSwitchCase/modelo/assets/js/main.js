const dataAtual = new Date()
//const dataAtual = new Date('2021-12-25 15:30:59') // teste manual

const dia = zeroAEsquerda(dataAtual.getDate())
const mes = zeroAEsquerda(dataAtual.getMonth()+1)
const ano = zeroAEsquerda(dataAtual.getFullYear())
const horas = zeroAEsquerda(dataAtual.getHours())
const minutos = zeroAEsquerda(dataAtual.getMinutes())
const diaSemana = dataAtual.getDay()

function zeroAEsquerda (num) { // função para acrescentar o 0 a esquerda em numeros com apenas 1 caractere
    return num >= 10 ? num : `0${num}`
}

function diaSemanaAtual(dataAtual){
    
    const diaSemana = dataAtual.getDay()
    let diaSemanaTexto

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'segunda-feira'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'terça-feira'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'quarta-feira'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'quinta-feira'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'sexta-feira'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'sábado'
            return diaSemanaTexto           
        default:
            diaSemanaTexto = 'Dia da Semana não encontrado' 
    }
}

function mesAtual(dataAtual){

    const mesAtualDescricao = dataAtual.getMonth()   
    let mesTexto

    switch (mesAtualDescricao) {
        case 0:
            mesTexto = 'Janeiro'
            return mesTexto
        case 1:
            mesTexto = 'Fevereiro'
            return mesTexto
        case 2:
            mesTexto = 'Março'
            return mesTexto
        case 3:
            mesTexto = 'Abril'
            return mesTexto
        case 4:
            mesTexto = 'Maio'
            return mesTexto
        case 5:
            mesTexto = 'Junho'
            return mesTexto
        case 6:
            mesTexto = 'Julho'
            return mesTexto   
        case 7:
            mesTexto = 'Agosto'
            return mesTexto
        case 8:
            mesTexto = 'Setembro'
            return mesTexto
        case 9:
            mesTexto = 'Outubro'
            return mesTexto
        case 10:
            mesTexto = 'Novembro'
            return mesTexto
        case 11:
            mesTexto = 'Dezembro'
            return mesTexto     
        default:
            diaSemanaTexto = 'Mês não encontrado'      
    }  
}

const diaSemTexto = diaSemanaAtual(dataAtual)
const mesAtualTexto = mesAtual(dataAtual)
const dataCompleta = `${diaSemTexto}, ${dia} de ${mesAtualTexto} de ${ano} ${horas}:${minutos}`
console.log(dataCompleta)

// ------ ### MOSTRANDO RESULTADO NO HTML ### -----------

const h1 = document.querySelector('.container h1') // selecionando o "h1" da class "container" do HTML
//h1.innerHTML = 'Só para vc ver' // mostra o resultado no "h1" do HTML
h1.innerHTML = dataCompleta