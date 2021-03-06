angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('menu.app', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/app.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('menu.categorie', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorie.html',
        controller: 'categorieCtrl'
      }
    }
  })

  .state('menu.conversations', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conversations.html',
        controller: 'conversationsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.pageTheme', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pageTheme.html',
        controller: 'pageThemeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});