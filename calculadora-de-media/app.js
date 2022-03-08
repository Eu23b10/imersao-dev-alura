const btnMean = document.getElementById('mean')

const showMean = () => {
    const result = document.getElementById('result')
    const notaDoPrimeiroBimestre = Number(document.getElementById('value-one').value)
    const notaDoSegundoBimestre = Number(document.getElementById('value-two').value)
    const notaDoTerceitoBimestre = Number(document.getElementById('value-three').value)
    const notaDoQuartoBimestre = Number(document.getElementById('value-four').value)
    const somaDasNotas = ( notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceitoBimestre + notaDoQuartoBimestre )
    const mean = somaDasNotas / 4
    const aprovado = (mean >= 5.5) ? 'Aprovado' : 'Reprovado'

    result.innerHTML = `<p>
        Sua Media: ${mean.toFixed(1)} <br>
        Status: <b>${aprovado}</b> <br>
        <span classe="line"></span>
    </p>
    `
    const aprovadoColor = (aprovado == 'Aprovado') ? 'blue'  : 'red'

    document.querySelector('b').style.color = aprovadoColor
    // document.querySelector('.line').style.color = ''
}

btnMean.addEventListener('click',     showMean)