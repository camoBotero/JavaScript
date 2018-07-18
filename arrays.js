/*array con 100 objetos, cada objeto debe contener nombre, apellido cedula, telefono, estado*/
//alert('Entra');
var persona = new Object();
	persona.nombre;
	persona.apellido;
	persona.cedula ;
	persona.telefono;
	persona.estado;
var res = document.getElementById('resultado');
var nom = document.getElementById('nom');
var ape = document.getElementById('ape');
var ced = document.getElementById('ced');
var tel = document.getElementById('tel');
var est = document.getElementById('est');
var arreglo = new Array();

for (var i = 0; i < 10; i++) {
	//r = Math.round(Math.random() * (100 - 1) + 1);
	persona.nombre = cadAleatoria();
	persona.apellido = cadAleatoria();
	persona.cedula = numAleatorio (10000000, 99999999);
	persona.telefono = numAleatorio(1000000, 9999999);
	persona.estado = "F";
	
	res.innerHTML += "<br>" + "Nombre: " + persona["nombre"] +
	                          " Apellido: " + persona["apellido"] +
	                          " Cedula: " + persona["cedula"] +
	                          " Telefono: " + persona["telefono"];
	 /*nom.innerHTML = persona["nombre"];
	 ape.innerHTML = persona["apellido"];
	 ced.innerHTML = persona["cedula"];
	 tel.innerHTML = persona["telefono"];
	 est.innerHTML = persona["estado"];*/

	//var texto = makeid();
	//alert(texto);
	//alert(persona["nombre"]);
	//arreglo.push(persona);
	//arreglo[i] = persona ;	

}
/*alert('Tamaño arreglo: ' + arreglo.length);
alert("NOMBRE0: " + arreglo[0].nombre);
alert("NOMBRE1: " + arreglo[1].nombre);*/


/*for (var i = 0; i <= arreglo.length; i++) {
	res.innerHTML += "<br>" +"Nombre: "+ arreglo[i].nombre
	                        +" Apellido: "+ arreglo[i].apellido;
}*/

function numAleatorio(min, max){
	return Math.round(Math.random() * (max - min) + min);
}

function cadAleatoria(min, max){
	return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
