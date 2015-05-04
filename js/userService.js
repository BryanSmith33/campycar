var app = angular.module('campyCar');

	app.service('userService', function(fb){
		var user = {};
		this.login = function(){
			console.log(userName);
		}

		this.getUser = function(){
			return user;
		}
	});//end