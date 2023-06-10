console.log("Hello World1");
console.log("Separation of Concern");
//variable
let firstName = "Vicki";
let lastName = "Chen";
//constant
const interestRate = 0.3;
//interestRate = 1;//can't change interestRate due to type error
console.log(interestRate);
//primitives type
let name = "vicki"; //String Literal
let age = 25; //Number Literal
let isApproved = false; //Boolean Literal
let sex = undefined; //undefined is a tyoe but also a value
let selectColor = null; //null type
//Dynamic Typing
//type of variable can change at run time

//reference type
//Object {}
let person = {
  name: "V",
  age: 26,
};
//Dot notation
person.name = "K";
//Bracket notation
person["name"] = "Mary"; //"" can be used as well
//bracket notation is useful when you don't know the property of the object until runtime
let selection = "name";
person[selection] = "select";
console.log(person);

//Array is an object
let selectedColors = ["red", "blue"];
selectedColors[2] = 1; //array can store different type of object and length is dynamic
console.log(selectedColors.length);

//Fucntion
// Performing a task
function greet(name, lastName) {
  //name is an input to this function
  //name is the parameter
  console.log("Hello " + name + " " + lastName);
}
greet("John"); //John is the argument we supply during run time
//if argument not supply, will be undefined
greet("Mary", "Jane");

// Calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));
