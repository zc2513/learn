(function (angular) {
    "use strict";
   //1.引入angular.js文件，和路由angular-route.js文件
   //2.创建总模块；---并将模块控制范围书写ng-app
    const app=angular.module("myApp",['outer','outerB']);
        //[]--其他模块做不做为依赖模块；
        //控制器的范围全部由依赖模块的路由来制定；
    const MyCtrl = function ($scope) {
            $scope.message = 'Hello world'
        }
    app.controller('MyCtrl', MyCtrl)
})(angular);