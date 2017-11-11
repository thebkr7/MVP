// import angular from 'angular'; //TODO: test if really needed when done app
// var ngRoute = express.ngRoute;

var notepad = angular.module('notepad', []);  //'ngRoute'


//first time page opens should GET all notes
  //Change to be a button to refresh later.
// function mainController($scope, $http) {
notepad.controller('mainController', ['$scope', '$http', function($scope, $http) {

  //post request to server.
    //pass the inputted text (as json?)
  $scope.textToPost = {};

  $scope.addNote = function() {
    $http.post('/note', $scope.textToPost).then(function(response, error){
    if (error) {
      return console.log('error POST line 19 client', error)
    }
    console.log('succes POST??? line 21 client', response);
  }, function(response, error){
    if (error) {
      console.log('error POST line 24 client', error)
    } else if (response) {
      console.log('SUCCESS POST line 26 client', $scope.textToPost); //****THIS DATA IS FROM INPUT FIELD :D******
    }
  })};


//REFRESH BUTTON GET. untested
  $scope.products = [];
  $scope.retrieve = function() {
    $http.get('/note').then(function(response, error){ //error func
      if (error) {
        console.log('error GET line 34 client', error)
      } else if(response) {
        $scope.products = response.data;
        console.log('SUCCESS GET line 37 client', response);//response is data sent back from server(aka all db entries)
      }
    }, function(response, error){ //success func
      if (error) {
        console.log('error GET line 41 client', error)
      } else if (response) {
        console.log('SUCCESS GET line 43 client', response);
      }
    });
  }

}]);

// notepad.controller('myCtrl', function($scope) {
//   $scope.products = ['walk the unicorn', 'feed the blue whale'];
//   $scope.addNote = function(item) {
//     $scope.products.push($scope.newNote);
//   }
// });
