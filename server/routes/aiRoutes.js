import express from "express";
import { auth } from "../middlewares/auth2.js";
import { generateArticle, generateBlogTitle, generateImage } from "../controllers/aiController.js";


const aiRouter=express.Router(); 

// auth middleware to get plan data
aiRouter.post("/generate-article",auth,generateArticle);
aiRouter.post("/generate-image",auth,generateImage);
aiRouter.post("/generate-blog-title",auth,generateBlogTitle);

export default aiRouter;