const express = require('express')
const app = express()

// Home
app.get('/', function (req, res) {
  res.send('Hello World')
  
})

// Contact Me
app.get('/contact', function (req, res) {
    res.send('Contact; Muhammedmusarraf@gmail.com')
    
  })
  

// About
app.get('/about', function (req, res) {
    res.send("I\'m a python Developer Just learning Web Development")
    
  })
  

app.listen(3000, ()=>{
  console.log("Server started on port 3000");
    
})