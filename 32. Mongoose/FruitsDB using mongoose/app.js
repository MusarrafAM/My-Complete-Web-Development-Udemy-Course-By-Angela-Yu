
const mongoose = require('mongoose');

main().catch(err => console.log(err)); //IF there is any error while executing main show it in the console

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB'); // FruitsDB is the name of the database we need to connect if not exist it'll create one.
    // mongoose need sometime to connect until it connet our code wite that is await means here.

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled


    // !Creating schema
    const fritSchema = new mongoose.Schema({
        name: {type:String, required: [true, 'You forgot to add name']},
        rating: {type:Number, min:1, max:10},
        review: String
      });


    // !Compiling Schema into Model or Collection
    const Fruit = mongoose.model('Fruit', fritSchema);


    // !Create a Colection / tables with Data
    const fruit = new Fruit({ name: 'Apple',rating:7, review: "Good Fruit"  });
    // console.log(fruit.name); // 'Apple'


    // !save the files to our Database
    // await fruit.save()


    //  !Challenge create person database
    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favouriteFruit : fritSchema    // This is for relationshit
    });

     const Person = mongoose.model('Person', personSchema);

     const person = new Person({ name: "Angela",age:33 });
    //  console.log(person.name); // 'Apple'

    //  await person.save()



    // !Adding many collections at once

    const orange = new Fruit({ name: 'Apple',rating:7, review: "Good Fruit"  });
    const banana = new Fruit({ name: 'banana',rating:4, review: "Fine Fruit"  });
    const kiwi = new Fruit({ name: 'kiwi',rating:10, review: "Great Fruit"  });

    // Fruit.insertMany([orange, banana, kiwi]).then(function () {
    //     console.log("Successfully saved defult items to DB");
    // })
    // .catch(function (err) {
    //     console.log(err);
    //   });



    // --------------------------------------------------------------------------------------------------------


    // !Gettinng datas from database
  
    // let allFruits = await Fruit.find({})
    // console.log(allFruits);

    // allFruits.forEach(eachFruit => {
    //   console.log(eachFruit.name);

    // });



    // ----------------------------------------------------------------------------------------------------
    // !Update the database data

    // await Fruit.updateOne({ _id: '64829813861333db2fc8e1da' }, { name: 'Updated Apple' });

    // --------------------------------------------------------------------------------------------------------

    // !Delete the database data

    // await Fruit.deleteOne({ _id: '64829813861333db2fc8e1de' });


    // await Person.deleteMany({ name:'Angela'});


    // !Relatonship in mongoose  (Need to modify the schema See the personSchema) (important)
    // const pinapple = new Fruit({ name: 'Pinapple',rating:8, review: "Tasty Fruit"  });
    // const musha = new Person({ name: "Musarraf",age:23, favouriteFruit:pinapple });

    // await musha.save()



    // !challenge update the relationship   (important)
    // await Person.updateOne({ _id: '6482d3404960b94c51c7f27c' }, { favouriteFruit:kiwi });







  await mongoose.connection.close() 
 
}










