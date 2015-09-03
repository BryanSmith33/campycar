var app = angular.module('campyCar');

app.service('parseService', function($http){
  this.postData = function(message, name) {
    return $http ({
      method: "POST",
      url: 'https://api.parse.com/1/classes/campy',
      headers: {'X-Parse-Application-Id': '', 'X-Parse-REST-API-Key': ''},
      data: {
        'text': message,
        'user': name
      }
    });
  }

  this.getData = function() {
    return $http ({
      method: "GET",
      url:'https://api.parse.com/1/classes/campy?order=-createdAt',
      headers: {'X-Parse-Application-Id': '', 'X-Parse-REST-API-Key': ''}
    });
  }

});//end
