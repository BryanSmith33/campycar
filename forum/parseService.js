var app = angular.module('campyCar');

app.service('parseService', function($http){
  this.postData = function(message, name) {
    return $http ({
      method: "POST",
      url: 'https://api.parse.com/1/classes/campy',
      headers: {'X-Parse-Application-Id': 'uzkPzKYgLgF4Ie3QO4cpJhaPI7pLzAHYyUfHXFZh', 'X-Parse-REST-API-Key': 'mLQJyj4IbYOgu1Ro9wfJYRyOYVtx8ZdrATRJAVch'},
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
      headers: {'X-Parse-Application-Id': 'uzkPzKYgLgF4Ie3QO4cpJhaPI7pLzAHYyUfHXFZh', 'X-Parse-REST-API-Key': 'mLQJyj4IbYOgu1Ro9wfJYRyOYVtx8ZdrATRJAVch'}
    });
  }

});//end