var numbers = [3, 56, 2, 48, 5];

// !MAP
// ?allowing efficient access and manipulation of data. Instead of using for each we can use this,
//? This will create a list of item with procesed values.
// var mapped = numbers.map((num) => {
//   return num * 2;
// });

var mapped = numbers.map((num) => num * 2); //same as above but shortened.

// console.log(mapped);

// !Filter
//?array method that creates a new array by selectively keeping elements that meet a specified condition.
var filtered = numbers.filter((num) => num < 10);

// console.log(filtered);

// !Reduce
//?array method that combines all elements of an array into a single value by applying a function, accumulating the result at each step.
var reduced = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

// console.log(reduced);

//!Find
//?array method that searches through an array and returns the first element that satisfies a given condition.
//?It stops iterating as soon as it finds the first matching element and returns it.
var finded = numbers.find((num) => num > 10);

// console.log(finded);

//!FindIndex
//?an array method that searches for the index of the first element in an array that satisfies a provided condition.
//?If no matching element is found, it returns -1.
var findedIndex = numbers.findIndex((num) => num > 10);

console.log(findedIndex);

// // -----------------------------------------------------------------------------------------------------------
// import emojipedia from "./emojipedia";
// // !Challenge

// var newEmojiDescription = emojipedia.map((cur) =>
//   cur.meaning.substring(0, 100)
// );

// console.log(newEmojiDescription);
