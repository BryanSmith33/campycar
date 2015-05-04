var app = angular.module('campyCar', ["firebase", "ngRoute"]);

app.constant('fb', {
	url: "https://campy-car.firebaseio.com/"
});

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'ageVerify/age.html',
		controller: 'age'
	})
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginCtrl'
	})
	.when('/home',{
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	})
	.when('/howTo',{
		templateUrl: 'howTo/howTo.html',
		controller: 'howToCtrl'
	})
	.when('/forum',{
		templateUrl: 'forum/forum.html',
		controller: 'forumCtrl'
	})
	.when('/findCamps',{
		templateUrl: 'findCamps/camps.html',
		controller: 'campsCtrl'
	})
	.when('/weather',{
		templateUrl: 'weather/weather.html',
		controller: 'weatherCtrl'
	})
	.otherwise({
        redirectTo: '/home'
    });
});//end


