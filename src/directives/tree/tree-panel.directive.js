const angular = require('angular');
export default function ($compile) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      member: '='
    },
    template: "<li></li>",
    link: function (scope, element, attrs) {
      if (angular.isArray(scope.member.files)) {
        element.append("<collection collection='member.files'></collection>");
        $compile(element.contents())(scope)
      }
    }
  }
}
