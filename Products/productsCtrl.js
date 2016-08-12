angular.module("products")
    .controller("productsCtrl",["$scope","productSvc",function($scope,productSvc){
   // $scope.products = productSvc.getProducts()
     productSvc.getProducts()   
          .then(function(response){
            $scope.products = response ;
    })
          .catch(function(response){
            $scope.error = response ;
     })
          .finally(function(response){
            console.log("I am executed finally");
     })
    
    $scope.addItemsToCart = function(item) {
       productSvc.myCart(item);
    }        
    }]);