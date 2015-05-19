angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($window,$scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }

    $scope.forward=function(chat) {
 
        $window.plugins.navigation.forward("index.html/#/detail/"+chat.id, {}, function() {}, function() {});
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