// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'leaflet-directive', 'ngCordova','LocalStorageModule'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  
  });
})

.config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
  localStorageServiceProvider
  .setPrefix('dol')
  .setStorageType('sessionStorage')
  .setNotify(true, true);
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.howto', {
    url: '/howto',
    views: {
      'menuContent': {
        templateUrl: 'templates/howto.html',
        controller: 'HowtoCtrl'
      }
    }
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
  .state('app.landing', {
    url: '/landing',
    views: {
      'menuContent': {
        templateUrl: 'templates/landing.html',
        controller: 'landingCtrl'
      }
    }
  })
  .state('app.mapdetail', {
    url: '/map/:provid/:amphurid/:parcelno',
    views: {
      'menuContent': {
        templateUrl: 'templates/mapdetail.html',
        controller: 'MapDetailCtrl'
      }
    }
  })
  .state('app.maplist', {
    url: '/maplist',
    views: {
      'menuContent': {
        templateUrl: 'templates/maplist.html',
        controller: 'MaplistCtrl'
      }
    }
  })
  .state('app.layer', {
    url: '/layer/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/maplayer.html',
        controller: 'MapLayerDetailCtrl'
      }
    }
  })
  .state('app.layerdetail', {
    url: '/layerdetail/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/layerdetail.html',
        controller: 'LayerDetailCtrl'
      }
    }
  })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/landing');
});
