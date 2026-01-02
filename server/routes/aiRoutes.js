import express from "express";
import { auth } from "../middlewares/auth2.js";
import { generateArticle } from "../controllers/aiController.js";


const aiRouter=express.Router(); 

// auth middleware to get plan data
aiRouter.post("/generate-article",auth,generateArticle);

export default aiRouter;