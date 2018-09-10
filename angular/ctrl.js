var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {

$scope.currency = ["Naira", "US Dollars", "Ghana Cedi", "UK Pounds", "Japan Yen", "Euro", "South Africa Rand", "Uruguay Pesu", "Rusian Ruble"];

/*Cryptocompare API LINKS */

var ethUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Ether

var btcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Bitcoin

var ltcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Litecoin

var xrpUrl = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Ripple

var btcpUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTCP&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Bitcoin Private

var bchUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Bitcoin Cash

var usdtUrl = 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Tether

var etcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Ethereum Classic

var xmrUrl = 'https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Monero

var dashUrl = 'https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=USD,JPY,EUR,NGN,GHS,ZAR,UYU,GBP,RUB';//Dash

/*Cryptocompare API LINKS */

$http.get(dashUrl).then(function(response){
	$scope.dashValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(xmrUrl).then(function(response){
	$scope.xmrValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(etcUrl).then(function(response){
	$scope.etcValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(usdtUrl).then(function(response){
	$scope.usdtValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(bchUrl).then(function(response){
	$scope.bchValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(btcpUrl).then(function(response){
	$scope.btcpValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(xrpUrl).then(function(response){
	$scope.xrpValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(ltcUrl).then(function(response){
	$scope.ltcValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(ethUrl).then(function(response){
	$scope.ethValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(btcUrl).then(function(response){
	$scope.btcValue = response.data;
    },function(error){
		console.log(error);
});

$scope.crypto = {
	Ethereum : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.ethValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.ethValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.ethValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.ethValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.ethValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.ethValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.ethValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.ethValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.ethValue.RUB;
			break;
		}
	},

	Dash : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.dashValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.dashValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.dashValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.dashValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.dashValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.dashValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.dashValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.dashValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.dashValue.RUB;
			break;
		}
	},

	Monero : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.xmrValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.xmrValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.xmrValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.xmrValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.xmrValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.xmrValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.xmrValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.xmrValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.xmrValue.RUB;
			break;
		}
	},


	Tether : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.usdtValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.usdtValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.usdtValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.usdtValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.usdtValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.usdtValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.usdtValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.usdtValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.usdtValue.RUB;
			break;
		}
	},

	Ripple : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.xrpValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.xrpValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.xrpValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.xrpValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.xrpValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.xrpValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.xrpValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.xrpValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.xrpValue.RUB;
			break;
		}
	},

	EthereumClassic : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.etcValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.etcValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.etcValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.etcValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.etcValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.etcValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.etcValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.etcValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.etcValue.RUB;
			break;
		}
	},

	BitcoinPrivate : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.btcpValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.btcpValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.btcpValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.btcpValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.btcpValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.btcpValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.btcpValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.btcpValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.btcpValue.RUB;
			break;
		}
	},

	BitcoinCash : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.bchValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.bchValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.bchValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.bchValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.bchValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.bchValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.bchValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.bchValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.bchValue.RUB;
			break;
		}
	},

	Litecoin : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.ltcValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.ltcValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.ltcValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.ltcValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.ltcValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.ltcValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.ltcValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.ltcValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.ltcValue.RUB;
			break;
		}
	},

	Bitcoin : function(){
		switch ($scope.selectedCurrency) {
			case 'Naira' : 
			return $scope.coin * $scope.btcValue.NGN;
			break;
			case 'US Dollars' : 
			return $scope.coin * $scope.btcValue.USD;
			break;
			case 'Ghana Cedi' : 
			return $scope.coin * $scope.btcValue.GHS;
			break;
			case 'UK Pounds' : 
			return $scope.coin * $scope.btcValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.btcValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.btcValue.EUR;
			break;
			case 'South Africa Rand' : 
			return $scope.coin * $scope.btcValue.ZAR;
			break;
			case 'Uruguay Pesu' : 
			return $scope.coin * $scope.btcValue.UYU;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.btcValue.RUB;
			break;
		}
	}
};

});