// console.log("this is first line");
// console.log("This is second line");
// document.write("javascript connect");

//syntax
// console.log("this is \" a\" Javascript language");
// console.log('this is " a" Javascript language');
// console.log("this is ' a' Javascript language");
// console.log("this is ' to love' Javascript language");
// console.log('this is \' to love \' Javascript language');
// console.log("this is  \\\to love\\\ Javascript language");
// console.log("this is  \nto love Javascript language");
// console.log("this is  string");
// console.log(65);

// user input

// var x;


// x = prompt("enter your name");
// console.log(x);
// document.write(x);



// variable
//  var myName = "Maruf";

//  var x = 10;
//  var y = 100;

//  console.log(y);

 // operator 

 //string operator
//  var line1 = "hello";
//   var line2 = " real world";
//   var result = line1 + " " + line2;
//    console.log(result);


//  var line1 = 53;
//  var line2 = " real world";
//  var result = line1 + " " + line2;
//  console.log( typeof result);

//  var number1 = 52;
//  var number2 = 50;
//  var result = number1 + number2;
//  console.log( typeof result);


 // left to right
//  var number1 = 52;
//  var number2 = 50;
//  var name = "Anwar"
//  var result = number1 + number2 + name;
//  console.log( result);

/*var countries = [ "Bangladesh", "USA", "India"];
console.log(countries[2]);
console.log(countries.length);
countries[1] = "Canada";
var singleCountry = countries[0];
countries[3] = "Canada";
countries[countries.length] = " Norway"
countries.push("China","Japan","Pakistan","Sweden");
countries.pop();
console.log(countries);
countries.pop();
console.log(countries);
countries.pop();
console.log(countries);
countries.pop();
countries.shift()

console.log(countries);
countries.shift();

console.log(countries);
countries.shift();

console.log(countries);
countries.unshift("Pakistan");

console.log(countries);
countries.unshift("Nepal","Votan",);

console.log(countries); */

//String to array

/*var name = "Bangladesh is a Country";
var result = name.split();
console.log(result);
var countries = ["Bangladesh", "USA", "India"];
var result = countries.toString();
console.log(result);
var result = countries.join(",");
console.log(result);

var countries1 = ["Bangladesh", "USA", "India"];
var countries2 = ["Sewden", "Napal", "Votan"];

var result = countries1.concat(countries2);
console.log(result);
result.sort();
console.log(result);
result.reverse();
console.log(result); */

//class-18 object
// var arr = [12,1,["a","b",[10000,2000,10000]],100];
// console.log(arr);
// console.log(arr[2][2][0]);

//var arr = [12, 1, ["a", "b", [10000, 2000, 10000]], 100,{prop1: "Item 1", prop2: "Item2"}];

/* var arr = ["Item1", "Item 2",{prop1:"item01",prop2: [1,2,["anwar","mahir"]]}];
console.log(arr);
console.log(arr[2]);
console.log(arr[2].prop2[2][0]); */
/*
var object = {
  property1: "property one",
  property2: "property two",
  property3: 1000,
  property4: " ",
  property5: ["item Number 1","Item Number 2","item number 3"],
};
console.log(object);
var result = object.property5[2];
console.log(result); */

//class 20 undefine and null NaN


//class -22 template laterals (ES 6)
/*
var age = prompt();
var countNumber = 50;
if (age >= countNumber) {
  console.log("old");
} else {
  console.log("under " + countNumber);
}

var age = prompt();
var countNumber = 50;
if (age >= countNumber) {
  document.write("old");
} else {
  document.write("under " + countNumber);
}
 */



//class -24 Condition part 01
/* 
 var n = 9;
 if(n < 10){
  console.log("this number", n, "is smaller than 10");
 } else{
    console.log("this number", n, "is grater than 10");

 }
 */

 //class -25 Condition part 02
/* 
 var number = prompt();
 var result;
 var remainder = number % 2;
 if(number ==0){
  result = "this is number zero"
 }
 else if(remainder == 0){
  result = "This number is even";
 }else{
  result = "this is odd number";
 }

 console.log(result);
 document.write(result);

  */

  //class -26 Switch Statement
/* 
  var choice = prompt();
  var text;
   switch (choice) {
     case "a":
       text = "You have Selected option 1";
       break;
     case "b":
       text = "You have Selected option a ";
       breake;
     case "c":
       text = "You have Selected option b ";
       break;
     case "c":
       text = "You have Selected option c";
       break;
     case "e":
       text = "You have Selected option d";
       break;
     case "f":
       text = "You have Selected option e";
       break;
     case "g":
       text = "You have Selected option f";
       break;
       default:
        text = " You have no option selected";
       
   }
   console.log(text);
   document.write(text);
   */

   // class 27 condition exercise



  /*
   var number = prompt("What is your number");

   number = parseInt(number);
   var grade;
   if(number <= 100 && number >= 80){
   grade = "A+";
   }else if (number < 80 && number >= 70) {
     grade = "A";
   } else if (number < 70 && number >= 65) {
     grade = "A-";
   } else if (number < 65 && number >= 60) {
     grade = "B";
   } else if (number < 60 && number >= 50) {
     grade = "C";
   } else if (number < 50 && number >=40 ) {
     grade = "D";
   }
    else if (number < 40 && number >= 0  ) {
     grade = "You are failed";
   }
    else {
     
     grade =
       "this number " +
       number +
       " is invalid ,please correct number and try again";
   }
   document.write(grade);
   
  */

  //class 28 loop

   //class 29 for loop
/*
   for (var i = 2; i <= 100 ; i++){
    if(i % 2 == 0){
       document.write(i + " ");
    }
   }

  for (var i = 20000; i >= 1; i--) {
    if (i % 120 == 0) {
      document.write(i + " ");
    }
  }
  */

     //class 30 while loop
     
/*
var i = 0;
while(i <= 10){
  document.write("Anwar");
  i++;
}

// while loop

var i = 0;
while(i <=10) {
  document.write(i+" ");
  i++;
  
} */
/*

var i = 1;
var sum = 0;
var product = 1;
while(i <=10) {
  sum = sum + i;
  product = product * i;
  i++;
  
}
document.write("this sum " + sum);
document.write("this product  number" + product);
*/

//class 31 do while loop

// var i = 1;
// do{
//   console.log(i);
//   i++;
// }while(i <= 10);

//class 32 break and continue;
//break
// for ( var i = 1; i <=100; i++){
//   if(i == 77){
//     break;
//   }
//   document.write( "this is value of i =" +i);
// }

//continue
// for ( var i = 1; i <=100; i++){
//   if(i == 77){
//     continue;
//   }
//   document.write( i+"."+" i =" +i + "<br>");
// }

//class 33 array traversing ;

// let name = "Hello World";
// let foodName = ["Cake","Chocolate","Ice Cream"];
// for (var i = 0; i < name.length;i++){
//   if(name[i] == " "){
//     document.write(`index[i]` + "no word" + "<br>");

    
//   }else{
//     document.write(`index[i]` + " " + name[i] + "<br>");
//   }
  
// }
// for (var i = 0; i < foodName.length; i++) {
//   document.write(`index[i]` + " " + foodName[i] + "<br>");
// }



/*
class 34 for of and for in ;

for in = string/array/object;
for of = string/array;
let name = "I am learning Javascript";
for (var x in name){
  document.write(`index number ${x} and value ${name[x]}`+"<br>");
}
for (var i of name){
  document.write(`value ${i}`+"<br>")
}
let foodName = ["Cake", "Chocolate", "Ice Cream"];
for (var y in foodName) {
  document.write(`index number ${y} and value ${foodName[y]}` + "<br>");
}
let person = {
  name : "atif  islam",
  proffesion: "Singer",
  country: "Pakistan",
  age: 40

}
for (var a in person) {
  document.write(`index Property ${a} and value ${person[a]}` + "<br>");
}



// class 37 parameter agrument and Return ;
//parameters as  like variable;
let name = prompt("enter your name")
let age = prompt();
let country = prompt();

function saySomething(parameter1 = "name", age, country){
  document.write(`Hi ${parameter1} ${age} ${country}`);
}
saySomething(name, age,country);


// class 38 function expression and Arrow function ;
//function expression 
let saySomething = function(name1){
  console.log("Hello" + name1);
}

saySomething("man");

//Arrow function
let name = prompt("enter your name")

let saySomething1 = (name) =>{
  console.log(name);
}
saySomething1(name)

*/




  







