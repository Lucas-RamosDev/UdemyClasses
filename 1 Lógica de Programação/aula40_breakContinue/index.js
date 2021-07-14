const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2){// neste exemplo pula o numero 2
        continue;
    }

    if (numero === 7){// neste exemplo acha o 7 e para
        break;
    }

    console.log(numero)
}