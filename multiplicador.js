function multiplicar(numero){
	var rango = 10;
	document.getElementById('res').innerHTML = "";
	for (var i = 1; i <= rango; i++) {		
		document.getElementById('res').innerHTML += "<br>Multiplicador: " + numero + " * " + i + " = " + numero*i;
	}
	document.getElementById('v').innerHTML = "El número a calcular es: " + numero;	
}

function validaDatos(){
	var user = document.getElementById('user');
	var pass = document.getElementById('pass');
	/*alert(user.value);
	alert(pass.value);*/
	var r = document.getElementById('result');
	r.innerHTML = "Usuario: " + user.value + "<br>Password: " + pass.value;
}