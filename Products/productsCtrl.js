angular.module("products")
    .controller("productsCtrl",["$scope","productSvc",function($scope,productSvc){
    $scope.products = productSvc.getProducts();
    
    $scope.addItemsToCart = function(item) {
       productSvc.myCart(item);
    }        
    }]);