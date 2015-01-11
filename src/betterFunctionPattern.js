/*globals myNamespace, console*/
(function () {
    'use strict';
    myNamespace.BetterFunction = function () {
        var self = {},
            myPrivateVar = "hi everybody!",
            myPrivateMethod,
            myPublicMethodOne,
            myPublicMethodTwo;
        myPrivateMethod = function () {
            console.log("i can be invoked even if i'm private!");
        };
        myPublicMethodOne = function () {
            return myPrivateVar;
        };
        myPublicMethodTwo = function () {
            myPrivateMethod();
        };

        self.myProperty = "hi to all js programmers";
        self.myPublicMethodOne = myPublicMethodOne;
        self.myPublicMethodTwo = myPublicMethodTwo;

        return self;
    };
}());