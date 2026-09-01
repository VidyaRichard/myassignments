function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

console.log(greet("Developer"));

//object literals  implicit inference 
let user1={

    firstname: 'yuva',
    lastname: 'rani',
    mobilenumber:23232
}
console.log(user1.firstname)
console.log(user1.lastname)
console.log(user1.mobilenumber)
//explicit inference 
let user2:{
    firstname:string ,
    lastname:string,
    mobilenumber:number
} = {
    firstname:'yuva',
    lastname:'rani',
    mobilenumber:23232
};
let user3:{
    firstname:string ,
    lastname:string,
    mobilenumber:number
} = {
    firstname:'yuva',
    lastname:'rani',
    mobilenumber:23232
};
console.log("explicit inference")
console.log(user2.firstname)
console.log(user2.lastname)
console.log(user2.mobilenumber)
console.log("iam user 3",user3["mobilenumber"])