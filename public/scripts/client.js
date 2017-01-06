console.log('sourced');

var myApp = angular.module('myApp', []);

//controller
myApp.controller('AssignmentController', ['$scope', '$http', function($scope, $http) {
  console.log('NG');
  //post assignemnts
  $scope.postAssignment = function() {
    var objectToSend = {
      assignment_name: $scope.assignmentNameIn,
      student_name: $scope.studentNameIn,
      score: Number($scope.scoreIn),
      date_string: $scope.dateCompletedIn
    }; // end objectToSend
    console.log(objectToSend);
    //post assignment to the server
    $http({
      method: 'POST',
      url: '/assignments',
      data: objectToSend
    }).then(function(response){
      getAssignments();
      console.log(response);
    }); // end $http
  }; // end postAssignment

  //get assignments
  function getAssignments() {
    console.log('in getAssignments');
    $http({
      method: 'GET',
      url: '/assignments'
    }).then(function(response) {
      $scope.assignmentArray = response.data;
      console.log($scope.assignmentArray);
    }); // end $http
  } // end getAssignments

  getAssignments();

  $scope.deleteAssignment = function(index){
    console.log('Deleting index', index);
    $http({
      method: 'DELETE',
      url: '/assignments/' + index
    }).then(function(response){
      getAssignments();
      console.log(response);
    }); // end $http
  };

  $scope.showModifyForm = function(index){
    $scope.showMe = index;
  };

  $scope.modifyAssignment = function(index, newScore){
    var putString = '/assignments/' + index + '/' + newScore;
    console.log('PUT URL:', putString);
    $http({
      method: 'PUT',
      url: putString
    });
    $scope.showMe = 0;
  };

}]); // end controller
