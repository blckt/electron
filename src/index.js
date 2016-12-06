const angular = require('angular');
const uiRouter = require('angular-ui-router');

import services from './services/services.module';
import directive from './directives/directives';
import mainConfig from './main.module.config.js';

import MainPage from './mainPage/mainPage.module.js';

angular.module('MainApp', [uiRouter, services.name,MainPage.name,directive.name])
    .config(mainConfig);