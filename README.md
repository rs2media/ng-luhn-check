# ng-luhn-check - validate credit card input fields using [Luhn Algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm).
The goals is to provide an easy way to validate a credit card input field using [Luhn Algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm).

## Usage
First add

- `AngularJS`
- `ng-luhn-check`

to your HTML file.

Make sure you require `ngLuhnCheck` as a dependency of your AngularJS module.

## Installation
`bower install ng-luhn-check`

### directive
```html
<input type="tel" name="cc_number" ng-model="cc_number" maxlength="16" placeholder="Card Number" required luhnCheck>
<span class="error" ng-if="myForm.cc_number.$error.required" ng-hide="myForm.cc_number.$error.luhnCheck">Card Number is required</span>
<span class="error" ng-if="myForm.cc_number.$error.luhnCheck" ng-hide="myForm.cc_number.$pristine">Invalid Card Number</span>
```