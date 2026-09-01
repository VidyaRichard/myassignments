"use strict";
//numeric enum
var browserstatus;
(function (browserstatus) {
    //default the enum value start from 0 ,if not assign ,it will print numeric value 
    browserstatus[browserstatus["open"] = 0] = "open";
    browserstatus[browserstatus["close"] = 9] = "close";
    browserstatus[browserstatus["incognito"] = 10] = "incognito";
})(browserstatus || (browserstatus = {}));
console.log(browserstatus.incognito);
//string enum
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
function launchApp(env) {
    console.log("launching", env);
}
launchApp(environment.QA);
//heterogeneous enum
var testvalue;
(function (testvalue) {
    testvalue[testvalue["passed"] = 0] = "passed";
    testvalue[testvalue["add"] = 1] = "add";
    testvalue["failed"] = "fail";
    testvalue["skipped"] = "skipped";
    testvalue[testvalue["retry"] = 28] = "retry";
    testvalue[testvalue["only"] = 29] = "only";
})(testvalue || (testvalue = {}));
console.log(testvalue.only);
console.log(testvalue);
