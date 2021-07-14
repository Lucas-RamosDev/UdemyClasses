try {

    //console.log(a) // exemplo erro
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro!')
    console.log('Fechei o arquivo')

    try {
        console.log(b) // exemplo erro
    } catch (e) {
        console.log('Deu erro :(')
    }

} catch (e) {
    
    // É executada quando há erros
    console.log('Tratando o erro')

} finally{

    //sempre executado
    console.log('Finally: Eu Sempre sou executado')

}