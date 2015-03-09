(function() {
  'use strict';
  angular.module('ngLuhnCheck', ['ng']).directive('luhnCheck', function () {
   return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
        var luhnChk = function(luhn) {
          var len = luhn.length,
            mul = 0,
            prodArr = [
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ],
            sum = 0;
          while (len--) {
            sum += prodArr[mul][parseInt(luhn.charAt(len), 10)];
            mul ^= 1;
          }
          return sum % 10 === 0 && sum > 0;
        };
        function luhnCheck(value) {
          ngModel.$setValidity('luhn-check', luhnChk(value));
          return value;
        }
        ngModel.$parsers.push(luhnCheck);
        ngModel.$formatters.push(luhnCheck);
      }
    };
  });
}).call(this);