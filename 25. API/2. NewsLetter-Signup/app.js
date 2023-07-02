const e = require('express')
const express = require('express')
const https = require("https")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended:false }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/signup.html")
})


app.post('/', function (req, res) {
    const firstName = req.body.fname
    const lastName = req.body.lname
    const email = req.body.email
    
    const data = {
        members:[
        {
            email_address :email,
            status : "subscribed",
            merge_fields : {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]};

    const jsonData = JSON.stringify(data);

    const apiKeyMailchimp   = "4a4340b59a3b66b8f51d56adc34c9a53-us10"
    const audienceId = "9755d678b9"
    const url = "https://us10.api.mailchimp.com/3.0/lists/9755d678b9";
    const options = {
        method: "POST",
        auth : "Musarraf:56606b403efba267eb085f40e5f92099-us10"
    }
    const requset = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        }
        else{
            res.sendFile(__dirname + "/failure.html")
        }    


        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    requset.write(jsonData)
    requset.end();

  })



app.post('/failure', function (req, res) {
    res.redirect('/')
  })


app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started.");
})




