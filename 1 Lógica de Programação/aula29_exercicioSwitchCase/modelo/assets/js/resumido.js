// Estes comando abaixo gera o mesmo resultado aplicado no exercício, de forma bem mais resumida

const data = new Date()
const dataCompleta = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})
console.log(dataCompleta)