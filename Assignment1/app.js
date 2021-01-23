(function () {
  var module = angular.module('LunchCheck', []);
  module.controller('LunchCheckController', function ($scope, $filter) {
      $scope.lunchDishes = "";
      $scope.message = "";
      $scope.font = "";
      $scope.checkIfTooMuch = function () {
        if ($scope.lunchDishes == "") {
          $scope.message = "Please enter data first";
          $scope.font = "red";
          return;
        }
        var dishesArr = $scope.lunchDishes.split(",");
        dishesArr = dishesArr.filter(function(dish) {
          var dish = dish.trim();
          if (dish != "") {return true;}
        });
        $scope.font = "green";
        if (dishesArr.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
  });
})();
