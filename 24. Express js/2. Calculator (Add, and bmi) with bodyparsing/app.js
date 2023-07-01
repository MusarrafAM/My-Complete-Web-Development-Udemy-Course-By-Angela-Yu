const express = require('express')



const app = express()

// !Old body-parser way of parsing
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}));


// !New Expres way of parsing
app.use(express.urlencoded({ extended : true}));


// !Home Page
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var answer = num1 + num2

  res.send("The answer is " + answer);
})


// !bmiCalculator
app.get('/bmiCalculator', function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmiCalculator', function (req, res) {
  var weight = parseFloat(req.body.weight)
  var height = parseFloat(req.body.height)
  var bmi = Math.round(weight/(height*height));


  res.send("Your Bmi Value is " + bmi)
})

app.listen(3000, ()=>{
  console.log("Server Started at port 3000");
})



















