const citrus = ["Lime", "Lemon", "Orange"]
const fruits = ["Apple", "Banana", "Coconut", ...citrus] // !Spread Operator


console.log(fruits);

const fullName = {
    fName: "James",
    lName: "Bond"
}

const user = {
    ...fullName,
    id:1,
    username: "jamesbond007"
}


console.log(user);