/*globals myNamespace, console*/
(function () {
    'use strict';
    var privateVarFromModule;
    /*Here i use the module that is hosted in the revealingModulePattern.jd file*/
    privateVarFromModule = myNamespace.myRevealingModule.myPublicMethodOne();
    console.log(privateVarFromModule);
    myNamespace.myRevealingModule.myPublicMethodTwo();


}());
