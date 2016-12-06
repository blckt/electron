const angular = require('angular');

const services =  angular.module('ServicesModule', [])
    .service('treeService', require('./treeView.service').TreeViewService);

    export default services;