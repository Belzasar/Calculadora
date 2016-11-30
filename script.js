function Numeros(numero) {
  key = numero.keyCode || numero.which;
  teclado = String.fromCharCode(key);
  numeros = "0123456789";
  especiales = "8-37-39-46";
  teclaEspecial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      teclaEspecial = true;
    }
    if (numeros.indexOf(teclado)== -1 && !teclaEspecial) {
      return false;
    }
  }
}

function Ver(tecla) {
  var numero = document.calculadora.Pantalla.value;
  document.getElementById('Pantalla').value=numero+tecla;
}

function Eliminar() {
  var anterior = document.calculadora.Pantalla.value;
  var nuevoValor = anterior.substring(0, anterior.length-1);
  document.getElementById('Pantalla').value=nuevoValor;
}

function Calcular() {
    var operacion = document.calculadora.Pantalla.value;
    var resultado = eval(operacion);
    document.getElementById('Pantalla').value=resultado;
}