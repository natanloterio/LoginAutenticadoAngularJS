'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
    $scope.alerta = function(){
        alert('Alerta chamado');
    }
    $scope.pessoa = {nome:"",sobrenome:""};
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
