// Environment variables
require('dotenv').config() 

// Core server setup
const express = require('express');
const cors = require('cors');
// Authentication
const passport = require('passport');
const passportSetup=require('./passport')
const authRoute=require('./router/auth')
// Session management
const cookieSession = require('cookie-session'); 
const session = require('express-session');
const app=express(); 
// app.use(
//     cookieSession(
//         {
//             name: "session",
//             keys: [process.env.SESSION_KEY],
//             maxAge: 24*60*60*100 //24 hrs
//         }
//     )
// ) 

app.use(
    session({
        secret: process.env.SESSION_KEY, // your session key
        resave: false,                    // don’t save session if unmodified
        saveUninitialized: false,         // don’t create session until something stored
        cookie: {
            maxAge: 24 * 60 * 60 * 1000 , // 24 hours
             sameSite: "lax"
        }
    })
);

app.use(passport.initialize());
app.use(passport.session()); 

app.use( cors({
    //frontend url
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials : true
})) 

app.use("/auth", authRoute);

const port=process.env.PORT || 8000; 
app.listen(port,()=>{
  console.log(`Server is listening ${port}`)
})