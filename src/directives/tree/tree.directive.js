export default function () {
  return {
    restrict: "E",
    replace: true,
    scope: {
      collection: '='
    },
    template: "<ul><file ng-repeat='file in collection' member='file'></file>;<li ng-repeat='file in collection' ng-bing='file.file'></li></ul>"
  }
}
