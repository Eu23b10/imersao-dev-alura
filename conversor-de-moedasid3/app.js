function Converter() {
	const resultado = document.getElementById('valorConvertido')
	const valorEmDolares = document.getElementById('valor').value
	const valorEmDolaresNumerico = Number( valorEmDolares )
	const valorEmMeticais = valorEmDolaresNumerico * 64.4
	const valorEmMeticaisFixado = 'Mzn: ' + valorEmMeticais.toFixed(2)
	const valorEmReais = valorEmDolaresNumerico * 5
	const valorEmReaisFixado = 'R$: ' + valorEmReais.toFixed(2)
	
	resultado.innerHTML = valorEmMeticaisFixado +'<br>'
	resultado.innerHTML += valorEmReaisFixado
}