// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
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
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
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
  })

  .state('app.journeys', {
      url:'/myjourneys',
      views:{
        'menuContent': {
          templateUrl: 'templates/myjourney.html'
        }
      }
  })

  .state('app.live', {
      url:'/live',
      views:{
        'menuContent': {
          templateUrl: 'templates/live.html'
        }
      }
  })

  .state('app.journey', {
      url:'/journey',
      views:{
        'menuContent': {
          templateUrl: 'templates/journey.html'
        }
      }
  })

  .state('app.journey1', {
      url:'/journey1',
      views:{
        'menuContent': {
          templateUrl: 'templates/journeyViewTrack.html',
          controller: 'slider'
        }
      }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent':{
        templateUrl: 'templates/homeScreen.html',
        controller: 'HomeCtrl'
      }
    }
  })


  .state('app.milestones', {
      url:'/milestones',
      views:{
        'menuContent': {
          templateUrl: 'templates/milestones.html'
        }
      }
  })

  .state('app.track', {
      url:'/track',
      views:{
        'menuContent': {
          templateUrl: 'templates/trackday.html'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
