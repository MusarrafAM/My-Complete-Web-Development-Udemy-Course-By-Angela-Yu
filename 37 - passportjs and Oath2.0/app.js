require('dotenv').config()
const express = require('express')
const ejs = require("ejs");
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt'); these 2 for bcrypt
// const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');


const app = express()
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended :false}))
app.use(express.static("public"));

//Setting session
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());



//mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userDB');

}


// Creating schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
	  googleId: String,
    secret:String

  });

// adding pligins to our Schema
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Creating Model
const User = mongoose.model('User', userSchema);



// Google authentication
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"   // Same one we put inthe google credential
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
	process.nextTick(function() {
		done(null, { id: user._id, username: user.username });
	});
});
passport.deserializeUser(function(user, done) {
	process.nextTick(function() {
		return done(null, user);
	});
});



// Home Route
app.get('/',  (req, res) => {
  res.render("home")
})


app.get('/auth/google',
  passport.authenticate('google', { scope: ["profile"] })
  );

app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect('/secrets');
  });



app.get('/login',  (req, res) => {
    res.render("login")
  })
  

app.get('/register',  (req, res) => {
  res.render("register")
})


app.get('/secrets', async (req, res) => {
  try{
    const foundUsers = await User.find({"secret": {$ne: null}}) // not equal to null
    if (foundUsers) {
      res.render("secrets", {usersWithSecrets: foundUsers})
    }
  }catch(err){
    console.log(err);
  }
});



app.get("/submit", (req, res) => {
  if(req.isAuthenticated()){
    res.render("submit")
  }else {
    res.redirect("/login")
  } 
})



app.post("/submit",(req, res)=>{
  const submitedSecret = req.body.secret;

  User.findById(req.user.id).then((foundUser)=>{
      foundUser.secret = submitedSecret;
      foundUser.save().then(res.redirect("/secrets"))
  })
})

app.get("/logout", (req, res, next) => {
	req.logout(function(err) {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
});




// You also need to change the User.register() to be an await function:
app.post("/register", async (req, res) => {
	try {
		const registerUser = await User.register(
                    {username: req.body.username}, req.body.password
                );
		if (registerUser) {
			passport.authenticate("local") (req, res, function() {
				res.redirect("/secrets");
			});
		} else {
			res.redirect("/register");
		}
	} catch (err) {
		res.send(err);
	}
});
 
// Login was pretty much the same
app.post("/login", (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password
	});
 
	req.login(user, (err) => {
		if (err) {
			console.log(err);
		} else {
			passport.authenticate("local")(req, res, function() {
				res.redirect("/secrets");
			});
		}
	});
});
 
// req.logout() needs a callback:
app.get("/logout", (req, res, next) => {
	req.logout(function(err) {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
});



















//!Register post route usng bcrypt
// app.post('/register',  async (req, res) => {
    
//      try {
//         const hashedSaltedPassword = await bcrypt.hash(req.body.password, saltRounds)  // salt and hash using bcrypt.
    
//         const newUser = new User({ 
//           email: req.body.username,
//           password: hashedSaltedPassword
//        });

//         await newUser.save();  //Save the data
//         console.log("Email password saved succefully");
//         res.render('secrets')
//      }catch(err){
//         console.log(err);
//      } 
//   })


  // !Login Post Request Using bcrypt
  // app.post("/login", async (req, res) => {
  //   const userEnterdPassword = req.body.password
  //   try {
  //       const selectedUser =  await User.findOne({ email: req.body.username })

  //       if (selectedUser != null){
  //         const match = await bcrypt.compare(userEnterdPassword, selectedUser.password)
  //         if(match){
  //           console.log("Welcome");
  //           res.render("secrets") 
  //         }else{
  //           console.log("Wrong Password");    // Wrong password
  //           res.redirect("/login") 
  //         }
  //       }else{
  //         console.log("Wrong Username");      // Wrong Username
  //         res.redirect("/login")           
  //       }
  //       }
  //   catch(err){
  //       console.log(err);
  //   }
    

  // })








app.listen(3000, function(){
    console.log("Server has started.");
})

