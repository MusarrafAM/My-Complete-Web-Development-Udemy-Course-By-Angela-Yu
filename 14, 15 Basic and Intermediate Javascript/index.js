

// -----------------------------------Aert and Propmt -----------------------
// var name = prompt("Enter your name : ");
// first_letter = name.slice(0,1).toUpperCase();
// rest_letters = name.slice(1, name.length).toLowerCase();
// final_name = first_letter + rest_letters;
// alert(final_name)


// ------------------------------------------------------------------

// var dog_age = prompt("Enter your Dog's age : ");
// dog_to_human_age = (dog_age - 2) * 4 + 21;
// alert("Your dog is " + dog_to_human_age + "years old in human years.");

// ------------------------------Functions----------------------------------------

// function getMilk(money) {   
//   var numberOfBottles = Math.floor(money / 1.5);
//   console.log("Buy " + numberOfBottles + " bottles of milk")
// }

// getMilk(5);


// ----------------------------Functions with input--------------------------------------------
// function lifeInWeeks(age) {
//     var yearsLeftToLive = 90 - age;
    
//     var ageLeftInDays = yearsLeftToLive * 365
//     var ageLeftInWeeks = yearsLeftToLive * 52
//     var ageLeftInMonths = yearsLeftToLive * 12

    
//     console.log("You have " + ageLeftInDays + " days, "+ Math.round(ageLeftInWeeks) + " weeks, and " +Math.round(ageLeftInMonths)+  " months left.");
// }
// lifeInWeeks(56);



// ----------------------Functions with output---------------------------


// function bmiCalculator(weight, height){
//     var bmi = Math.round(weight / Math.pow(height, 2));
//     return bmi;
// }

// var bmi = bmiCalculator(65, 1.8); 
// console.log(bmi);




// --------------Random number------------------------------
// console.log(Math.floor(Math.random() * 3) + 1 )
// var loveScore =  Math.floor(Math.random() * 100) + 1


// ---------------Love Calculator-----------------------------------------
// if (loveScore === 100) {
//   console.log(loveScore +  " Your Love is pure 100%")
// }else if (loveScore > 70) {
//   console.log(loveScore + " Your Love is Greate")
// }else {
//   console.log(loveScore + " Your Love is Ok")
// }

// ------------------BMI Calculator----------------------------------------
// function bmiCalculator(weight, height){
//     var bmi = Math.round(weight / Math.pow(height, 2));
    
//     if (bmi > 24.9) {
//         return "Your BMI is "+ bmi +", so you are overweight." ;
//     }else if (bmi >= 18.5 && bmi <= 24.9){
//         return "Your BMI is "+ bmi +", so you have a normal weight."
//     }else{
//         return "Your BMI is "+ bmi +", so you are underweight."
//     }
// }


// var bmi = bmiCalculator(65, 1.8); 
// console.log(bmi);



// ------------------Leap Year--------------------------------------------------------------
// var year = prompt("Enter the year: ");

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("Leap year.")
//         }else {
//             console.log("Not leap year.")
//         }
//     }else {
//         console.log("Leap year.")
//     }
// }else {
//     console.log("Not leap year.")
// }


// -------------------Arrays (Just like python list)---------------------------------------
// var nameList = ["Musarraf", "Ihzan", "Sahee", "zalahi"];

// user_name = prompt("Enter your name : ")

// if (nameList.includes(user_name)) {
//     alert("Welcome")
// }else {
//     alert("Sorry next time.")
// }






// ------------------FizzBuzz--------------------------------------------------------

// var output = [];
// var count = 1


// function fizzBuzz(){
//     if (count % 3 === 0 && count % 5 === 0 )  {
//         output.push("FizzBuzz");
//     }
//     else if (count % 3 === 0) {
//         output.push("Fizz");
//     }
//     else if (count % 5 === 0) {
//         output.push("Buzz");
//     }
//     else {
//         output.push(count);
//     }

    
//     console.log(output);
//     count ++;
    
// }

// -------------------Who is gonne pay-------------------------------------------------------------------------

// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

// function whosPaying(names_list) {
    
    
//     var random_numeber = Math.floor(Math.random() * names.length);
//     return names[random_numeber] + " is going to buy lunch today!";
    
// }
// console.log(whosPaying(names));



// ----------------------FizzBuzz with arrays------------------------------ 
// var output = [];
// var count = 1

// function fizzBuzz(){
//     for (var count=1; count <=100; count++){
//         if (count % 3 === 0 && count % 5 === 0 )  {
//             output.push("FizzBuzz");
//         }
//         else if (count % 3 === 0) {
//             output.push("Fizz");
//         }
//         else if (count % 5 === 0) {
//             output.push("Buzz");
//         }
//         else {
//             output.push(count);
//         }
//         console.log(output);
//     }
    
// }

// fizzBuzz();


// ------------------------------------------------------------------------------------
// -------------------Fibonacci sequence----------------------------------------------------

    // var output = []
    // if (n === 1){
    //     output = [0];
    // }
    // else if (n === 2){
    //     output = [0, 1];
    // }
    // else {
    //     output = [0, 1];
    //     for (var i = 3; i <= n; i++){
    //         var sum = output[output.length - 1] + output[output.length - 2];
    //         output.push(sum)
    //     }
    // }
    
    // return output;

// ---------------------------------------------------------------------
