const data = new Date()

const numeroMes = data.getMonth()
const dia = data.getDate()
const ano = data.getFullYear()
const horas = data.getHours()
const minutos = data.getMinutes()
const numeroSemana = data.getDay()

function getNomesMes (numeroMes){

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ]

    return meses[numeroMes]
}

function getNomesDia (numeroSemana){

    const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'domingo',]

    return diaSemana [numeroSemana]
}

const mesTexto = getNomesMes(numeroMes)
const diaTexto = getNomesDia(numeroSemana)

const dataCompleta = `${diaTexto}, ${dia} de ${mesTexto} de ${ano} ${horas}:${minutos}`
console.log(dataCompleta)

