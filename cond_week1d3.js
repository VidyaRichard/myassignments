var browserName;
function launchBrowser(browserName)
{
var chrome;
if(browserName==chrome)
    {    
console.log("Lanched browser");
}
}
function runTests(testone)
{
    console.log("Lanching testrun  " +testone);
    switch(testone)
    {
        case "smokeTest":
        console.log("Rnning smoke test");
        break;
        case "sanityTest":
        console.log("Rnning  sanity test");
        break;
        case "regression":
        console.log("Running  regression test");
        break;
        default:
            console.log("smoke test");
    
}
}
launchBrowser();
runTests("smokeTest");
