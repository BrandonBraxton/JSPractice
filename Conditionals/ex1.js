let userAge = prompt("Enter your age: ")
if (userAge >= 18){
   console.log("You are old enough to drive.");
}
else{
    var ageToBe = 18;
    var yearsToWait = ageToBe - userAge;
    console.log(`You are left with ${yearsToWait} years to drive.`)
}

var myAge = 24;
if (userAge >= myAge){
    console.log("You are older than me.");
 }
 else{
     console.log("I am older than you.");
 }

let a = 3;
let b = 4;
if (a > b){
    console.log("a is greater than b")
}
else {
    console.log("a is less than b")
}
let v = (a>b) ? ("a is greater than b"):("a is less than b")
console.log(v)

let userNum = prompt("Enter a number: ")
if (userNum%2==0){
    console.log(`${userNum} is an even number`)
}
else{
    console.log(`${userNum} is an odd number.`)
}