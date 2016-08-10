angular.module("Qantas")
    .controller("navLinks",["$scope",function($scope){
    $scope.loadNavLinks = "Templates/header.html";
    $scope.loadData = function(item){
        if ( item == "products"){
        $scope.dataURL = "Templates/products.html";            
        }
        if ( item == "register"){
        $scope.dataURL = "Templates/register.html";            
        }
        if ( item == "login"){
        $scope.dataURL = "Templates/login.html";            
        }
        if ( item == "cart"){
        $scope.dataURL = "Templates/cart.html";            
        }
    }
    
}]);
