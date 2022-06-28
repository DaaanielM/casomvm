const formulario = document.querySelector('#formulario');

//Evento, para cuando demos al boton calcular, haga el procedimiento de la función
formulario.addEventListener('submit', validarFormulario);

//Función donde se hará el procedimiento de calcular
function validarFormulario(e) {
	e.preventDefault(); // Para que la  página web no se actualice después del submit
	const concreto = parseFloat(document.getElementById('concreto').value); // para obtener el valor de entrada en JavaScript
	const acero = parseFloat(document.getElementById('acero').value);
	const excavacion = parseFloat(document.getElementById('excavacion').value);
	const relleno = parseFloat(document.getElementById('relleno').value);
	const parrilla = parseFloat(document.getElementById('parrilla').value);
	const cal = parseFloat(document.getElementById('cal').value);
	const cemento = parseFloat(document.getElementById('cemento').value);
	const pilote = parseFloat(document.getElementById('pilote').value);

	// Hacemos la operación de sumar los materiales
	const costos =
		concreto +
		acero +
		excavacion +
		relleno +
		parrilla +
		cal +
		cemento +
		pilote;

	// Multiplicamos el total de los materiales * la cantidad de edificios
	const totalCostos = costos * 147;

	// Mostramos el resultado
	const resultado = document.getElementById('resultado');
	resultado.textContent = `El costo estimado es: ${totalCostos}`;

	// reseteamos el form
	formulario.reset();
}

// Mostramos el css del resultado
function mostrarResultado() {
	document.getElementById('result').style.display = 'flex';
}
