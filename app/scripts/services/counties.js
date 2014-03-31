'use strict';

angular.module('mapAppApp')
  .service('Counties', ['$http', function Counties($http) {
    return {get: function(callback){
        $http.get('/data/counties.json', {}).then(function(data){
            callback(data.data);
          });
      }
    };
  }]);
