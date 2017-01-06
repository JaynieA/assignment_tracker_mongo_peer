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

}]); // end controller
