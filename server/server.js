// Environment variables
require('dotenv').config() 

// Core server setup
const express = require('express');
const cors = require('cors');
// Authentication
const passport = require('passport');
// Session management
const cookieSession = require('cookie-session'); 

const app=express(); 
app.use(
    cookieSession(
        {
            name: "session",
            keys: [process.env.SESSION_KEY],
            maxAge: 24*60*60*100 //24 hrs
        }
    )
) 

app.use(passport.initialize());
app.use(passport.session()); 

app.use( cors({
    //frontend url
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials : true
})) 

const port=process.env.PORT || 8000; 
app.listen(port,()=>{
  console.log(`Server is listening ${port}`)
})