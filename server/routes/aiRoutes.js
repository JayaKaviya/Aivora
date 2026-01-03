import express from "express";
import { auth } from "../middlewares/auth2.js";
import { upload } from "../configs/multer.js";
import { generateArticle, 
        generateBlogTitle, 
        generateImage, 
        removeImageBackground,
        removeImageObject,
        reviewResume} from "../controllers/aiController.js";


const aiRouter=express.Router(); 

// auth middleware to get plan data
aiRouter.post("/generate-article",auth,generateArticle);
aiRouter.post("/generate-blog-title",auth,generateBlogTitle);
aiRouter.post("/generate-image",auth,generateImage);
aiRouter.post("/remove-image-backgorund",upload.single('image'),auth,removeImageBackground);
aiRouter.post("/remove-image-object",upload.single('image'),auth,removeImageObject);
aiRouter.post("/review-resume",upload.single('image'),auth,reviewResume);


export default aiRouter;