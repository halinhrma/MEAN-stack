app.controller('do-you-knowCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  
  apiService.getPostDoYouKnow()
    .then(function(product) {
      $scope.data = product.data;
      console.log('product', product);
    })
});
