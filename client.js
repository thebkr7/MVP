
var notepad = angular.module('notepad', []);  //'ngRoute'


//first time page opens should GET all notes
  //Change to be a button to refresh later.
function mainController($scope, $http) {

  //get request to server for all notes
  // $http({
  //   method: 'GET',
  //   url: '/note'
  // })
        //or
  $http.get('/note', config).then(success, error) {
    if (error) {
      console.log('error GET line 17 client', error)
    }
    if (success) {
      console.log('SUCCESS GET line 20 client', success);
      //$scope.todos = succes .data?
    }
  }

  //post request to server.
    //pass the inputted text (as json?)
  $scope.textToPost = {};

  $scope.addNote = function() {
    $http.post('/note', $scope.textToPost, config).then(success, error) {
    if (error) {
      console.log('error POST line 31 client', error)
    }
    if (success) {
      console.log('SUCCESS POST line 34 client', success);
      //$scope.todos = succes .data?
    }
  };



}




notepad.controller('myCtrl', function($scope) {
  $scope.products = ['walk the unicorn', 'feed the blue whale'];
  $scope.addNote = function(item) {
    $scope.products.push($scope.newNote);
  }
});
