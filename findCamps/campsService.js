var app = angular.module('campyCar');

app.service('campsService', function($http, $q){
	var ref = new Firebase("https://campy-car.firebaseio.com/")
	var deferred = $q.defer();
	this.getData = function(data){
	return $http({
 	  method: "GET",
 	  url: 'https://trailapi-trailapi.p.mashape.com/',
 	  headers: { 
      'X-Mashape-Key': '7JKX1gXaPJmsh6NY8oRuxYKvr0kAp1Abzfijsn3XVFSwAVCAPf'
    }
   	}).success(function(data){
        deferred.resolve(data.data)
        console.log(data);
      })
      .error(function(err){
        console.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
      }
});
