var app = angular.module('campyCar');

app.controller('loginCtrl', function($scope, $location, $firebaseObject){
	var ref = new Firebase("https://campy-car.firebaseio.com/");

	 $scope.logMeIn = function(){
		$location.path('/home/')
	};



});//end