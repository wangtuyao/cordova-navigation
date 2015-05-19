angular.module('starter.directive', [])
    .factory('navigation', function($q, $window) {
        var factory = {},
            plugn;
        if (!$window.plugins) {
            $window.plugins = {};
        };


        factory.forward = function(title, options) {
            plugn = $window.plugins.navigation;
            if (plugn) {
                var q = $q.defer();
                plugn.forward(title, options, function() {
                    q.resolve();
                }, function() {
                    q.reject();
                })
                return q.promise;
            };
        }

        return factory;
    })