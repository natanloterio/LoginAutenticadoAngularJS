'use strict';


var meuApp = angular.module('meuApp',[]);

meuApp.factory('Dados',function(){
    return {message:"Eu sou um dado de um serviço"}
})
function primeiroContorller($scope,Dados){
    $scope.dados = Dados;
}

function segundoContorller($scope,Dados){
    $scope.dados = Dados;
}