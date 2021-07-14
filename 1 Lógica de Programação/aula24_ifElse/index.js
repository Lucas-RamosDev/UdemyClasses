// IF, ELSE IF, ELSE

const hora = 23
const usuario = 'Lucas Ramos'
if ( hora >= 0 && hora <= 11) {
    console.log(`Bom dia ${usuario}! agora são ${hora} horas`)
} else if ( hora >= 12 && hora <= 17){
    console.log(`Boa tarde ${usuario}! agora são ${hora} horas`)
} else {
    console.log(`Boa noite ${usuario}! agora são ${hora} horas`)
}

const chovendo = true
if (chovendo == true){
    console.log(`Está chovendo, vou fica em casa :(`)
} else {
    console.log(`Oba! Esta vou sair :)`)
}