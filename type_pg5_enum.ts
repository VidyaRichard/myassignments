//numeric enum
enum browserstatus
{
    //default the enum value start from 0 ,if not assign ,it will print numeric value 
    open,
    close=9,
    incognito
}
console.log(browserstatus.incognito)

//string enum

enum environment
{
    DEV='dev',
    QA='qa',
    PROD='prod'
}
function launchApp(env:environment)
{
    console.log("launching",env)
}
launchApp(environment.QA)

//heterogeneous enum

enum testvalue{
    passed,
    add,
    failed="fail",
    skipped="skipped",
    retry=78,
    only
}
console.log(testvalue.only)
console.log(testvalue)