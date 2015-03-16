angular
  .module('weather')
  .config(function ($routeProvider){
    $routeProvider
      .when('/10day', {
        templateUrl: 'app/weather/10day.html',
        controller: 'GetWeather',
        controllerAs: 'weather'
      })
      .when('/current', {
        templateUrl: 'app/weather/current.html',
        controller: 'GetWeather',
        controllerAs: 'weather'
      })
  })