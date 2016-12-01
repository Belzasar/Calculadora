// Constants
var NUMS = '0123456789',
	  SPECIALS = '8-37-39-46';
	
// DOM elements
var $valorConstante = document.calculadora.pantalla,
    $pantalla = document.querySelector( '#pantalla' ),
    $eliminar = document.querySelector( 'input[value=CE]' ),
    $calcular = document.querySelector( '.calcular' );

/**
 * [numbers get numbers and do the math]
 * @param {Number} numero [number to be use in calculator]
 */
function Numeros( numero ) {
	var key = numero.keyCode || numero.which,
      teclado = String.fromCharCode( key ),
      numeros = NUMS,
      especiales = SPECIALS,
      teclaEspecial = false;
	for ( var i in especiales ) {
      if ( key === especiales[ i ] ) {
        teclaEspecial = true;
      } 
      if ( numeros.indexOf( teclado ) === -1 && !teclaEspecial ) {
        console.log('algo pasa');
      }
	}
}

function ver( tecla ) {
	var numero = $valorConstante.value;
	$pantalla.value = numero + tecla;
}

/**
 * [Delete number]
 */
$eliminar.addEventListener( 'click', function() {
	var anterior = $valorConstante.value,
		  nuevoValor = anterior.substring( 0, anterior.length - 1 );

	$pantalla.value = nuevoValor;
});

/**
 * [calculate a number]
 */
$calcular.addEventListener( 'click', function() {
  var operacion = $valorConstante.value,
      resultado = eval( operacion );

  $pantalla.value = resultado;
});

/**
 * apply numbers
 */
$pantalla.addEventListener( 'keypress', Numeros );
