function meuEscopo (){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = querySelector('.nome');
        const sobrenome = querySelector('.sobrenome');
        const peso = querySelector('.peso');
        const altura = querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo()
