// --- ### METODO SPLICE ### ---

//                 0        1        2        3       4
const nomes = ['Lucas', 'Bruna', 'Miguel', 'Sueli', 'João']
console.log(nomes)

// nomes.splice(indece atual, qts qro deletar, elem1, elem2, elem3)
const removidos = nomes.splice(3, 2); // Remove do indece 3, 2 elementos = .splice(3, 2)
console.log(nomes, removidos)

const removeEAdc = nomes.splice(1, 1, 'Esiquiel'); // Remove do indece 1 o nome 'bruna' e adiciona no indece 1 o 'Esiquiel'
console.log(nomes, removeEAdc)
console.log('')

// ----------------------------

const carros = ['Escort', 'Fiesta', 'EcoEsport', 'FordK', 'Focus']
console.log(carros)

// ---> Simulando .pop (remove ultimo resultado)
const removeUltimo = carros.splice(-1, 1);
console.log(carros, removeUltimo)

// ---> Simulando .shift (remove primeiro resultado)
const removePrimeiro = carros.splice(0, 1);
console.log(carros, removePrimeiro)

// ---> Simulando .push (adiciona o elemente por ultimo)
carros.splice(carros.length, 0, 'Maverick');
console.log(carros)

// ---> Simulando .unshift (adiciona o elemente por primeiro)
carros.splice(0, 0, 'Ferrari');
console.log(carros)