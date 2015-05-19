function Navigation() {
    this.rightButtonCallback = null;
    this.leftButtonCallback = null;
}
Navigation.prototype.forward = function(title, options, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "navigation", "forward", [title, options]);
};

Navigation.prototype.setTitle = function(title, options, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "navigation", "setTitle", [title, options]);
};
Navigation.prototype.setupRightButton = function(title, onClick, options,successCallback, errorCallback) {
    this.rightButtonCallback = onClick;
    cordova.exec(successCallback, errorCallback, "navigation", "setupRightButton", [title, options]);
};
Navigation.prototype.setupRightButton = function(title, onClick, options,successCallback, errorCallback) {
    this.leftButtonCallback = onClick;
    cordova.exec(function() {}, function() {}, "navigation", "setupLeftButton", [title, options]);
};
Navigation.prototype.setHidesBarsOnSwipe = function(setting) {
    cordova.exec(function() {}, function() {}, "navigation", "setHidesBarsOnSwipe", [setting]);
};

Navigation.prototype.presentView = function() {
    cordova.exec(function() {}, function() {}, "navigation", "presentView", []);
};

Navigation.prototype.leftButtonTapped = function() {

    if (typeof(this.leftButtonCallback) === "function")
        this.leftButtonCallback()
};
Navigation.prototype.rightButtonTapped = function() {

    if (typeof(this.rightButtonCallback) === "function")
        this.rightButtonCallback()
};
 
Navigation.install = function() {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.navigation = new Navigation();

    return window.plugins.navigation;
};

cordova.addConstructor(Navigation.install);