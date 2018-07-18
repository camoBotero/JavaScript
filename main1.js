"use babel";
let app = angular.module('app', []);

app.controller('ctrlMain', function($scope, rest){
	/*$scope.saluda = "Hola mundo";
	$scope.myFuncion = function(){
		console.log("this ");
		rest.absData().then(function(res){
			$scope.informacion = res;
		})
	}*/
	
	var dg = this;
	dg.resultado = 0;

	dg.persona = new Object();
	dg.persona.nombre;
	dg.persona.apellido;
	dg.persona.cedula ;
	dg.persona.telefono;
	dg.persona.estado;
	
	dg.miArreglo = [];
	dg.tObjetos = function(){
		//var arreglo = new Array();		
		for (var i = 0; i < 2; i++) {			
			dg.persona.nombre = dg.cadAleatoria();			
			dg.persona.apellido = dg.cadAleatoria();
			dg.persona.cedula = dg.numAleatorio (10000000, 99999999);
			dg.persona.telefono = dg.numAleatorio(1000000, 9999999);
			dg.persona.estado = "F";			
			/*res.innerHTML += "<br>" + "Nombre: " + persona["nombre"] +
			                          " Apellido: " + persona["apellido"] +
			                          " Cedula: " + persona["cedula"] +
			                          " Telefono: " + persona["telefono"];*/			
			dg.miArreglo.push(dg.persona);			
		}
	}

	/*function multiplicar(numero){
		//dg.resdata = [];
		var rango = 10;
		for (var i = 1; i <= rango; i++) {
			dg.resdata.push({"a":numero, "b":i, "c":numero*i});
		}

		console.log(dg.resdata)
	}*/

	dg.numAleatorio = function (min, max){
		return Math.round(Math.random() * (max - min) + min);
	}

	dg.cadAleatoria = function (){
		return Math.random().toString(36).replace(/[^a-z]+/g, '');
	}

})

.service('rest', function($http){
	var obj = {};

	obj.absData = function(){
        return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
    }

    return obj;

});