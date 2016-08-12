angular.module("products")
    .service("productSvc","$q","$http",[function($q,$http){  
    var selectedProducts = [];    
    var products = [];    
    this.getProducts =  function(){
        var defer =$q.defer();
        $http.get('Data/products.json')
            .then(function(response){
            products = response.data.products;
            defer.resolve(products);
        })
            .catch(function(response){
            defer.reject("Error occured");
        })
        
        return defer.promise;
    } 
 
    
this.myCart = function(item){
   selectedProducts.push(item);
}
 this.cartItems = function() {
    return selectedProducts;
}
  
}]);