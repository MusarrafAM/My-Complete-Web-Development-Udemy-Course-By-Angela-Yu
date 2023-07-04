const express = require('express')
const app = express()
const date = require( __dirname + '/date.js');

app.use(express.urlencoded({ extended :false}))
app.use(express.static('public'))

app.set('view engine', 'ejs')

let items = ["Eat brackfast", "Get ready"]
let workItems = []

// Home route
app.get('/', function (req, res) {
  let day = date.getDate()   // get the getDate function form imported date object
  res.render("list", {listTitle: day,listItems: items})
})

// When we press submit it will got to home route because we put it like that in  form action
// Home route for post
app.post('/', function (req, res) { 
   let item = req.body.newItem
   if (req.body.bname === "work"){
    workItems.push(item)
    res.redirect('/work')
   }else{
    items.push(item)
    res.redirect('/');
   }
  
    
 })

//  work route
app.get('/work', function(req, res){
  res.render('list', {listTitle: "work",listItems: workItems})
})


app.listen(3000, function(){
    console.log("Server has started.");
})






