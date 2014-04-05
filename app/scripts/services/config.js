'use strict';

angular.module('mapAppApp')
  .factory('Config', [function Config() {
    return {
        title: 'Simple Leaflet Viewer',
        map: {
            initialCenter:{
                lat: 37.270833,
                lng: -76.706944,
                zoom: 12
              },
              baselayers:{
                  osm: {
                    name: 'Open Street Map',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                  },
                  cloudmade: {
                    name: 'Cloudmade Tourist',
                    type: 'xyz',
                    url: 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png',
                    layerParams: {
                        key: '007b9471b4c74da4a6ec7ff43552b16f',
                        styleId: 7
                      }
                    }
                  },
              overlaylayers: {
                  water: {
                      name:'water',
                      type: 'geoJSON',
                      url:'http://tile.openstreetmap.us/vectiles-water-areas/{z}/{x}/{y}.json',
                      layerOptions: {
                          style: {
                              color: "#00D",
                              fillColor: "#00D",
                              weight: 1.0,
                              opacity: 0.6,
                              fillOpacity: .2
                            }
                        },
                      pluginOptions:{
                          cliptiles: true
                      }
                    }
                }
                }
              };

  }]);
