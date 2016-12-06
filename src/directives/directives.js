const angular = require('angular');


export default angular.module('directivesModule',[]).
directive('treeView',require('./treeView/treeView.directive').default)
.directive('collection',require('./tree/tree.directive').default)
.directive('file',require('./tree/tree-panel.directive').default)
