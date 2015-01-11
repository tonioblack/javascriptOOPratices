/*globals myNamespace, console*/
(function () {
    'use strict';
    myNamespace.SuperSimpleFunction = function () {
        var self = this,
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
    };
}());