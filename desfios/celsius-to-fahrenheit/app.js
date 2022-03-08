// TF = ( TC * (9/5) ) + 32
// TC = ( TF - 32) * ( 5/9)


const convertTemperature = () => {
    console.log('>_ Working')
    const tCelsius = Number(document.getElementById('temperature').value)
    const result = document.getElementById('result')
    const tFahrenheit = ( tCelsius * (9/5) ) + 32

    result.innerHTML = `<p>
    ${tFahrenheit.toFixed(1)} F
    </p>
    `
}

const input = document.getElementById('temperature')
input.addEventListener('input', convertTemperature)

