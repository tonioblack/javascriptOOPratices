/*globals myNamespace, console*/
(function () {
    'use strict';
    /*this is my favourite technique to create modules
    * first of all i define an iife (here above) then i add
    * a new member to the namespace that will contain my module.
    * I immediately invoke the function that create my module returning
    * only stuffs that i want to be public.
    * Since public stuff if wrapped inside this function (closure) i can access private members too
    * by means of public members
    * */
    myNamespace.myRevealingModule = (function () {
        var myPrivateVar = "hi everybody!",
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
        return {
            myPublicMethodOne: myPublicMethodOne,
            myPublicMethodTwo: myPublicMethodTwo
        };
    }());
}());