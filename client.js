

var app = angular.module('notepad', []);
app.controller('myCtrl', function($scope) {
  $scope.products = ['walk the unicorn', 'feed the blue whale'];
  $scope.addNote = function(item) {
    $scope.products.push($scope.newNote);
  }
});
