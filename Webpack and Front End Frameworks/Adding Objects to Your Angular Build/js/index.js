var angular = require('angular');

var app = angular.module('app', []);

require('./bands/bandList')(app);
require('./bands/band-info')(app);