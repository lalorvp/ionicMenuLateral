angular.module('misservicios', [])
.service('servicio', function($q, $http, Config){
	function login (params){
		var deferred = $q.defer();
      	$http.post(Config.PATH + Config.LOGIN, params)
       .then(function(response){
        	deferred.resolve(response);
      	});
		return deferred.promise;
	}

	function lista (){
		var deferred = $q.defer();
      	$http.get(Config.PATH + Config.USER)
       .then(function(response){
        	deferred.resolve(response);
      	});
		return deferred.promise;
	}

	return{
		login: login,
		lista: lista,
	}
});