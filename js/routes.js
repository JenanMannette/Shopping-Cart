app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "Home"
        })
        //.when("/:id/show", {
        //    templateUrl: "partials/show.html",
        //    controller: "Home"
        //})
        .otherwise({
            redirectTo: "/"
        });

}]);

