import {clerkMiddleware,requireAuth} from '@clerk/express'

// Core server setup
import express from 'express';
import cors from 'cors';

// Environment variables
import 'dotenv/config';

// Authentication
import passport from "passport";
import "./passport.js";
import authRoute from "./routes/auth.js";

// Session management
import cookieSession from "cookie-session";
import session from "express-session";

// Cloudinary configuration
import connectCloudinary from './configs/cloudinary.js';

// import router from './routes/index.js';
import aiRouter from './routes/aiRoutes.js';


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

await connectCloudinary();

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

// app.use(cors())
app.use(express.json())

//Clerk
app.use(clerkMiddleware())
app.use(requireAuth())

//Routes
app.use("/auth", authRoute);
// app.use("/", router);
app.use('/api/ai',aiRouter);




const port=process.env.PORT || 8000; 
app.listen(port,()=>{
  console.log(`Server is listening ${port}`)
})