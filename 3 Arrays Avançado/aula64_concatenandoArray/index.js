// --- ### CONCATENCADO ARRAY ### ---

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// EXEMPLO 1 - método .concat
const metodoConcat = array1.concat(array2);
console.log(metodoConcat)

// EXEMPLO 2 - método '...spread' 
// obs.: (repare que os '...' posso usar tanto para '...rest' qt '..spread')

const alfabeto1 = ['a', 'b', 'c'];
const alfabeto2 = ['d', 'e', 'f'];

const metodoSpread = [...alfabeto1, 'olá', ...alfabeto2]; // se quiser ode adicionar um valor no meio, como mostra o ex.
console.log(metodoSpread)