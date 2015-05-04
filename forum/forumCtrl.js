var app = angular.module('campyCar');

app.controller('forumCtrl', function($scope, parseService){

  $scope.options=[{raw: 'dd/mm/yyy', pretty: 'Day'}, {raw: 'hh:mm:ss', pretty: 'Time'}];

  $scope.getParseData = function() {
    parseService.getData().then(function(response){
      $scope.messages = response.data.results;
     // console.log(response)
    });
  };
  
  $scope.getParseData();
    

  $scope.postData = function(keyCode) {
    if (keyCode === 13) {
	    parseService.postData($scope.input, $scope.name).then(function(data){
	         $scope.input = "";
	         $scope.name = "";
	    });
    };
    
  }


  setInterval(function(){
    $scope.getParseData();
  }, 1500)
})//end
