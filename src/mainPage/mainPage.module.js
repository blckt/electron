const angular = require('angular');
export default angular.module('MainPage', [])
.config(($stateProvider)=>{
    $stateProvider.state({
        name:'main',
        url:'/',
        template:require('./mainPage.template.html')
    })
})