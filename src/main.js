/*globals myNamespace, console*/
(function () {
    'use strict';
    var privateVarFromModule,
        privateVarFromSuperSimpleFunction,
        superSimpleFunctionInst1,
        superSimpleFunctionInst2,
        betterFunctionInst1,
        betterFunctionInst2;

    /*Here i use the module that is hosted in the revealingModulePattern.jd file
     * useful if you need to encapsulate members in a 'singleton like' class*/
    privateVarFromModule = myNamespace.myRevealingModule.myPublicMethodOne();
    console.log(privateVarFromModule);
    myNamespace.myRevealingModule.myPublicMethodTwo();

    /*Here i use the super simple function pattern
     * useful if you need to create multiple instances of a class
     * but we have some disadvantages: the use of the terrible word new
     * and the 'replication' of all members for all instances*/
    superSimpleFunctionInst1 = new myNamespace.SuperSimpleFunction();
    superSimpleFunctionInst2 = new myNamespace.SuperSimpleFunction();

    privateVarFromSuperSimpleFunction = superSimpleFunctionInst1.myPublicMethodOne();
    console.log(privateVarFromSuperSimpleFunction);
    superSimpleFunctionInst1.myPublicMethodOne();

    superSimpleFunctionInst2.myPublicMethodTwo();
    superSimpleFunctionInst2.myProperty = "i'm from inst 2";
    console.log(superSimpleFunctionInst1.myProperty);
    console.log(superSimpleFunctionInst2.myProperty);


    /*Here i use a better function pattern (according to me)
     * useful if you need to create multiple instances of a class
     * Is better because we can avoid the use of word new
     * but we have the same problem of 'replication' of members on each instance*/
    betterFunctionInst1 = myNamespace.BetterFunction();
    betterFunctionInst2 = myNamespace.BetterFunction();

    privateVarFromSuperSimpleFunction = betterFunctionInst1.myPublicMethodOne();
    console.log(privateVarFromSuperSimpleFunction);
    betterFunctionInst1.myPublicMethodOne();

    betterFunctionInst2.myPublicMethodTwo();
    betterFunctionInst2.myProperty = "i'm from inst 2";
    console.log(betterFunctionInst1.myProperty);
    console.log(betterFunctionInst2.myProperty);


}());
