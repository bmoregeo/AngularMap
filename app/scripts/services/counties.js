'use strict';

angular.module('mapAppApp')
  .factory('Counties', ['$http', 'Config', function ($http, Config) {

    return {
        get: function(callback){
            $http.get(Config.map.geojson.counties.url, {cache:true}).then(function(data){
                callback({
                        data: data.data,
                        style: Config.map.geojson.counties.style
                        //onEachFeature: onEachFeature,
                        //resetStyleOnMouseout: true
                        }

                );
              });
          }
      };
  }]);
