'use strict';

describe('myApp module',function(){
    beforeEach(module('myApp'));
    
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller=_$controller_;
    }));
    
    describe('$scope.greeting',function(){
        it('should return geeting input',function(){
            var $scope={};
            var controller=$controller('HelloController',{$scope:$scope});
            $scope.greeting.text='hello';
            expect($scope.greeting.text).toEqual('hello');
        });
    });
});