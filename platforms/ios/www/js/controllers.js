angular.module('starter.controllers', ["starter.directive"])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($window, $scope, Chats, navigation) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }

    $scope.forward = function(chat) {

        // $window.plugins.navigation.forward("index.html/#/chats/"+chat.id, {
        //     title:"Chats Detail"
        // }, function() {}, function() {});
        navigation.forward("index.html/#/chats/" + chat.id, {
            title: "Chart Detail Native"
        });


    }
})

.controller('ChatDetailCtrl', function($window, $scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});