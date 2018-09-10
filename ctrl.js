const NGNbtcval = 2318007.90;
const NGNethval = 79857.61;
const USDbtcval = 6000;
const USDethval = 400;

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.currency = ["Naira", "US Dollars"];


$scope.crypto = {
	Ethereum : function(){
	  if ($scope.selectedCurrency == "Naira") {
	  	return $scope.coin * NGNethval;
	  } else if ($scope.selectedCurrency == "US Dollars") {
	  	return $scope.coin * USDethval;
	  	}
	},

	Bitcoin : function(){
	  if ($scope.selectedCurrency == "Naira") {
	  	return $scope.coin * NGNbtcval;
	  } else if ($scope.selectedCurrency == "US Dollars") {
	  	return $scope.coin * USDbtcval;
  		}
	}
};

});