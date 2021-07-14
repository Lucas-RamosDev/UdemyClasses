//--- ### FUNÇÃO RECURSIVA - Ela chama ela mesma (exemplo: efeito looping)

function recursiva(max) {
    if (max >= 10) return; 
    max++;
    console.log(max)

    recursiva(max)
}

recursiva(0);