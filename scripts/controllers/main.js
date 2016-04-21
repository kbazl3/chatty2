'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    // messageService.getMessages().then(function ( response ) {
    //   $scope.messages = response.data;
    // });

    $scope.addMessage = function ( message, username, pic ) {
      if (message) {
              console.log(message, username);
        messageService.addMessage(message, username, pic).then(function ( response ) {

          $scope.messages = response.data;
        });
      }
      $scope.message = "";
      $scope.username = "";
      $scope.pic = "";
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
