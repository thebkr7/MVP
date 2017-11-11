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
  // $scope.retrieve = function() {
  //   $http.get('/note').then(function(response, error){
  //     if (error) {
  //       console.log('error GET line 17 client', error)
  //     }
  //     if (response) {
  //       console.log('SUCCESS GET line 20 client', response);
  //       //$scope.todos = succes .data?
  //     }
  //   }, function(response, error){
  //     if (error) {
  //       console.log('error GET line 25 client', error)
  //     }
  //     if (response) {
  //       console.log('SUCCESS GET line 28 client', response);
  //       //$scope.todos = succes .data?
  //     }
  //   });
  // }

}]);





// notepad.controller('myCtrl', function($scope) {
//   $scope.products = ['walk the unicorn', 'feed the blue whale'];
//   $scope.addNote = function(item) {
//     $scope.products.push($scope.newNote);
//   }
// });
