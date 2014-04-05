'use strict';

angular.module('mapAppApp')
  .factory('Counties', ['$http', function ($http) {

    return {
        get: function(callback){
            $http.get('/data/county/gz_2010_us_050_00_20m.json', {cache:true}).then(function(data){
                callback(data.data);
              });
          }
      };
  }]);
