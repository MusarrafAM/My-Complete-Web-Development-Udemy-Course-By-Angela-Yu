const animals = [
  { name: "cat", sound: "meow"},
  { name: "dog", sound: "woof" },
];

// !Destructuring

//?Destructuring Arrays
let [cat, dog] = animals;
// console.log(cat);

//?Destructuring Objects
// let { name, sound } = cat;
// console.log(sound);

// ?Giving Default Values  if no value for name them Coco will be set.
let { name = "Default Name of cat", sound = "brrrr" } = cat;
console.log(name);




// !Nested

// const animals = [
//     { name: "cat", sound: "meow", feedingRequrments: { food: 2, water: 3 } },
//     { name: "dog", sound: "woof" },
//   ];


// const [cat, dog] = animals;
// const {name, sound, feedingRequrments: {food, water}} = cat

// console.log(food);