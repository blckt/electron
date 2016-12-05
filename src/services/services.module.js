export default angular.module('ServicesModule', [])
    .service('treeService', /*@ngInject*/  require('./treeView.service').TreeViewService);