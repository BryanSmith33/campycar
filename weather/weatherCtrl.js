
var app = angular.module('campyCar');

app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService, $firebaseObject){
  var ref = new Firebase("https://campy-car.firebaseio.com/")
  var fetchWeather =function(zip) {
    weatherService.getWeather(zip).then(function(data){
      $scope.place = data;
      // console.log($scope.place)
    }); 
  }
  
  fetchWeather();
  
  $scope.findWeather = function(zip) {
    $scope.place = '';
    fetchWeather(zip);
  };
}]);


