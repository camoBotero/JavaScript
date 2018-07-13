//alert('Hola mundo desde javaScript');
document.write('Hola mundo desde javascript');
var variable1 = "<br/>Hola Mundo";
document.write(variable1);

var alcance = 15;
var pDato = document.getElementById('dato');
var dat = [];

for(var i=0; i<alcance; i++){
	console.log(i);
	dat.push(i);
	pDato.innerHTML = dat;
}

/*var user = prompt('Usuario');
var pass = prompt('Contraseña');*/
function login(){
	var usuario = document.getElementById('usuario').value;
	var password = document.getElementById('password').value;

	//document.write('Usuario: ' + usuario + ' Password: ' + password);
	var u = document.getElementById('user');
	u.innerHTML = 'Usuario: ' + usuario + ' Password: ' + password;

	akhsdfkha
}



//final.innerHTML = 'Usuario: ' + user + ' Password: ' + pass;