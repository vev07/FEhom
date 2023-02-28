const num = prompt("Enter your number");
console.log(num * 0.1);
const num1 = prompt("Enter your number");
const num2 = prompt("Other your number");
if(num1 < num2) {
    console.log("num1 is smallest -" + num1);
} else {
    console.log("num2 is smallest -" + num2);
} 
const num3 = prompt("Enter your number");
if(num3 > 100) {
    console.log("You entered number -" + num3 + ". It's morethen 100");
} else if(num3 == 100) {
    console.log("You entered number -" + num3 + ". It's 100");
} else {
    console.log("You entered number -" + num3 + ". It's less then 100");
}
const firstName = prompt("Enter your name");
const age = prompt("How are you old?"); 
if(age > 17) {
    console.log("Hello. Your name is -"+firstName+". you are -"+age);
} else {
    console.log("Hi. Your name is -"+firstName+". you are -"+age);
}
