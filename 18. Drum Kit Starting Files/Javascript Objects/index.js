function HouseKeeper(name, age, experience, city){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.city = city;
    this.cleanHouse = function (){
        console.log("Cleaning the House");
    }
    
}

var worker1 =  new HouseKeeper("james", 22, "2 years", "colombo");


console.log(worker1.experience);

console.log(worker1.cleanHouse());
