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
	dg.calcular = function(num1, num2){
		dg.resultado = num1*num2;
	}

	dg.resdata = [];
	dg.tmultiplicar = function(numero){
		multiplicar(numero);
	}

	function multiplicar(numero){
		dg.resdata = [];
		var rango = 10;
		for (var i = 1; i <= rango; i++) {
			dg.resdata.push({"a":numero, "b":i, "c":numero*i});
		}

		console.log(dg.resdata)
	}
})

.service('rest', function($http){
	var obj = {};

	obj.absData = function(){
        return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
    }

    return obj;

});
