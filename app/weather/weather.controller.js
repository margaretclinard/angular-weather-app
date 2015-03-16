angular
  .module('weather')
  .controller('GetWeather', GetWeather);


function GetWeather ($scope, $http) {
  $http
    .get('http://api.wunderground.com/api/5031721c44f8c66f//geolookup/conditions/forecast10day/q/autoip.json')
    .success(function (data){
      $scope.weather = data;
    });

}