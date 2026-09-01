//union
//userinput is customized type alias name 
type userInput=string |number |boolean|any

let userName:userInput='support@testleaf.com'
userName=8765587876
userName=true

// Alias name for values
type supportedBrowser='chrome'|'firefox'|'msedge'
function invokeBrowser(browserName:supportedBrowser) {
    console.log(browserName)
}

//invokeBrowser('safari');
invokeBrowser('chrome')


// intersection 
type admin{
    adminName:String
    privilege:string
}
type employee={
    name:string 
    empid:number
    date:string 
}
type QA =admin & employee

//qaprofile is object and qa is type 

const QAprofile:QA={

    adminName:'testleaf',
    privilege:'server',
    name:'yuva',
    empid:2387,
    date:'2024-01-01',

}
console.log(QAprofile.adminName)
