angular.module("login")
    .controller("loginCtrl",["$scope","authenticateSvc",function($scope,authenticateSvc){
        
    $scope.user = {};
    $scope.isValidUser = true;
    $scope.signIn = function(){
    var status = authenticateSvc.validateUserLogin($scope.user) ;   
    if (status.isLoggedIn){
        $scope.isValidUser = true;
        $scope.feed = status;
    }
    else {
        $scope.isValidUser = false;
    }
            
    }
    
    }]);