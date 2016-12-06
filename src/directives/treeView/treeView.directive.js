const template = require('./treeView.template.html');
const {dialog} = require('electron').remote
export default function(){
    return {
        scope:{},
        restrict:'E',
        controller: function($scope,treeService){
             "ngInject";
            this.name = "hello";
          this.files = [];
            this.click=(evt)=>{
                var input = document.querySelector("#folder_chooser");
                dialog.showOpenDialog({
                    properties:['openDirectory']
                },(result)=>{
                    treeService.getFiles(result[0]).
                    then(result=>{
                      $scope.$apply(()=>{
                        this.files = result;
                      });
                    })
                })
            }
        },
        controllerAs:'vm',
        template
    }
}
