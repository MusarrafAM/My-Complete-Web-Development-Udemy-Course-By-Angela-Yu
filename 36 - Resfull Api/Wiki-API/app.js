const express = require('express')
const ejs = require("ejs");
const mongoose = require('mongoose');


const app = express()
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended :false}))
app.use(express.static("public"));

//Mongoose 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

}

// Creating Schema
const articleSchema = new mongoose.Schema( {
    title : String,
    content : String 
})

//Create a Model
const Article = mongoose.model('Article', articleSchema);



// !Chainable route to handle "/articles"  =  Easy way to route 
// !---------------------------------------------Request Targetting all Articles----------------------

app.route("/articles")
.get(async function (req, res) {
  await Article.find({})
    .then(allArticles => {
      res.send(allArticles)
    })
    .catch(err =>{
      res.send(err)
    })
})

.post(async (req, res) => {

  const article = new Article({ // Create document using Article Model Object.
    title: req.body.title,
    content: req.body.content
  }); 

  await article.save()  // Always use then and catch for your mongose operations
    .then(succes => {
      res.send("Susscefully Added your article")
    })
    .catch(err => {
      res.send(err)
    })

})

.delete(async (req, res)=> {
  await Article.deleteMany()  // If we dont specify anything it will delete all
    .then(success =>{
      res.send("Succesfully Deleted all articles.")
    })
    .catch (err=> {
      res.send(err)
    })
  
});

// !---------------------------------------------Request Targetting a Specific Articles----------------------

app.route("/articles/:articleTitle")
  .get(async (req, res) => {

    await Article.findOne({ title: req.params.articleTitle })
      .then((foundArticle) => {
        res.send(foundArticle)
      })
      .catch((err) =>{
        res.send("Article Not Found" + err)
      })
  })

  .put(async (req, res) => {
    try {
      const updatedArtice = await Article.replaceOne(
        { title: req.params.articleTitle },
        { title: req.body.title, content: req.body.content}
        )
        res.send(updatedArtice)
    }catch(err){
      console.log(err);
    }
  
      
  })

  .patch(async (req, res) => {
    try {
      const updatedArticle = await Article.updateOne(
        {title: req.params.articleTitle},   // Querying the Article
        req.body    // the data we need to enter
      )
      res.send(updatedArticle)
    } catch(err) {
      res.send(err)
    }
    
  })

  .delete(async (req, res) => {
    try {
      const deletedArticle = await Article.deleteOne({ title: req.params.articleTitle}); 
      res.send(deletedArticle)
    }catch(err){
      res.send(err)
    }
  })



// // !get all articels Route
// app.get('/articles', async function (req, res) {
//   await Article.find({})
//     .then(allArticles => {
//       res.send(allArticles)
//     })
//     .catch(err =>{
//       res.send(err)
//     })
// })

// // !Post Route for add data
// // !By using  POSTMAN we no need to create a html form to send the data.
// app.post("/articles", async (req, res) => {

//   const article = new Article({ // Create document using Article Model Object.
//     title: req.body.title,
//     content: req.body.content
//   }); 

//   await article.save()  // Always use then and catch for your mongose operations
//     .then(succes => {
//       res.send("Susscefully Added your article")
//     })
//     .catch(err => {
//       res.send(err)
//     })

// })

// // !Delete Route for  deleting all.
// app.delete("/articles", async (req, res)=> {
//   await Article.deleteMany()  // If we dont specify anything it will delete all
//     .then(success =>{
//       res.send("Succesfully Deleted all articles.")
//     })
//     .catch (err=> {
//       res.send(err)
//     })
  
// })





app.listen(3000, function(){
    console.log("Server has started.");
})





