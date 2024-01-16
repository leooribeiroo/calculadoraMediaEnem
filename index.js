function calcularMedia() {
    const notas = document.getElementById('notasGerais')
    const ul = document.getElementById('mediaFinal')

    const pRedacao = parseFloat(document.getElementById('pesoRedacao').value)
    const pMatematica = parseFloat(document.getElementById('pesoMatematica').value)
    const pLinguagens = parseFloat(document.getElementById('pesoLinguagens').value)
    const pNatureza = parseFloat(document.getElementById('pesoCienciasDaNatureza').value)
    const pHumanas = parseFloat(document.getElementById('pesoCienciasHumanas').value)

    const nRedacao = parseFloat(document.getElementById('notaRedacao').value)
    const nMatematica = parseFloat(document.getElementById('notaMatematica').value)
    const nLinguagens = parseFloat(document.getElementById('notaLinguagens').value)
    const nNatureza = parseFloat(document.getElementById('notaCienciasDaNatureza').value)
    const nHumanas = parseFloat(document.getElementById('notaCienciasHumanas').value)

    if (isNaN(pRedacao) || isNaN(pMatematica) || isNaN(pLinguagens) || isNaN(pNatureza) || isNaN(pHumanas) ||
        isNaN(nRedacao) || isNaN(nRedacao) || isNaN(nRedacao) || isNaN(nRedacao) || isNaN(nRedacao)) {
        alert("Digita um número nesta porra sua gabriela do caralho pqp")
        return;
    }

    let media = (((pRedacao * nRedacao) + (pMatematica * nMatematica) + (pLinguagens * nLinguagens) + (pNatureza * nNatureza) + (pHumanas * nHumanas)) / (pRedacao + pMatematica + pLinguagens + pNatureza + pHumanas))

    const newLi = document.createElement('li')
    newLi.textContent = `${media.toFixed(2)}`

    ul.appendChild(newLi)

    // Limpar os valores das caixas de digitação
    document.getElementById('pesoRedacao').value = '';
    document.getElementById('pesoMatematica').value = '';
    document.getElementById('pesoLinguagens').value = '';
    document.getElementById('pesoCienciasDaNatureza').value = '';
    document.getElementById('pesoCienciasHumanas').value = '';
    document.getElementById('notaRedacao').value = '';
    document.getElementById('notaMatematica').value = '';
    document.getElementById('notaLinguagens').value = '';
    document.getElementById('notaCienciasDaNatureza').value = '';
    document.getElementById('notaCienciasHumanas').value = '';
}

function limparTela() {
    const ul = document.getElementById('mediaFinal')
    ul.innerText = ''

    ul.textContent = ''; // Limpar o conteúdo da <ul>

    // Limpar os valores das caixas de digitação
    document.getElementById('pesoRedacao').value = '';
    document.getElementById('pesoMatematica').value = '';
    document.getElementById('pesoLinguagens').value = '';
    document.getElementById('pesoCienciasDaNatureza').value = '';
    document.getElementById('pesoCienciasHumanas').value = '';
    document.getElementById('notaRedacao').value = '';
    document.getElementById('notaMatematica').value = '';
    document.getElementById('notaLinguagens').value = '';
    document.getElementById('notaCienciasDaNatureza').value = '';
    document.getElementById('notaCienciasHumanas').value = '';

}



