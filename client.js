
var notepad = angular.module('notepad', []);  //'ngRoute'


//first time page opens should GET all notes
  //Change to be a button to refresh later.
// function mainController($scope, $http) {
notepad.controller('mainController', ['$scope', '$http', function($scope, $http) {


  //get request to server for all notes
  // $http({
  //   method: 'GET',
  //   url: '/note'
  // })
        //or
  $http.get('/note').then(function(response, error){
    if (error) {
      console.log('error GET line 17 client', error)
    }
    if (response) {
      console.log('SUCCESS GET line 20 client', response);
      //$scope.todos = succes .data?
    }
  }, function(response, error){
    if (error) {
      console.log('error GET line 25 client', error)
    }
    if (response) {
      console.log('SUCCESS GET line 28 client', response);
      //$scope.todos = succes .data?
    }
  });


  //post request to server.
    //pass the inputted text (as json?)
  $scope.textToPost = {};

  $scope.addNote = function() {
    $http.post('/note', $scope.textToPost).then(function(response, error){
    if (error) {
      console.log('error POST line 41 client', error)
    }
    if (response) {
      console.log('SUCCESS POST line 44 client', response);
      //$scope.todos = succes .data?
    }
  }, function(response, error){
    if (error) {
      console.log('error POST line 49 client', error)
    }
    if (response) {
      console.log('SUCCESS POST line 52 client', $scope.textToPost); //****THIS DATA IS FROM INPUT FIELD :D******





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
