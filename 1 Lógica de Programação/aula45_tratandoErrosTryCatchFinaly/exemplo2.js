function retornaHora(data){
    if( data && !(data instanceof Date) ) { // instanceof = verifica se o formato é data mesmo
        throw new TypeError('Esperando instância de Date. ')
    }

    if (!data) {
        data = new Date()
    }
  
    return data.toLocaleTimeString('pt-BR', { //- formato brasileiro
        hour: '2-digit', //- arredonda para 2 digitos as horas
        minute: '2-digit', //- arredonda para 2 digitos os minutos
        second: '2-digit', //- arredonda para 2 digitos os secundos
        hour12: false //- converte a hora para 24 horas
    })
}

try {

    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11)
    console.log(hora)
    
} catch (e) {
    
    console.log('Tenha um bom dia!')

}
