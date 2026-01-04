import OpenAI from "openai";
import db from '../configs/db.js'
import { clerkClient } from "@clerk/express";
import {v2 as cloudinary} from 'cloudinary';
import axios from "axios";
import fs from 'fs'
import * as pdf from "pdf-parse";

// import pdf from 'pdf-parse/lib/pdf-parse.js'

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const tokenMap = {
  800: 1800,
  1200: 2400,
  1600: 3000,
};



export const generateArticle=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const {prompt,length}=req.body;
          const plan=req.plan;
          const free_usage=req.free_usage;
          console.log("Prompt:", prompt, "Length:", length);
          if(plan !== 'premium' && free_usage>=50)
          {
            return res.json({success:false, message:"Limit reached.Upgrade to continue."})
          }

        // console.log("Generating article for user:", userId, "with plan:", plan, "and free usage:", free_usage,"prompt:",prompt,"length:",length);
       
        
        const response = await AI.chat.completions.create({
                model: "gemini-2.5-flash",
                messages: [
                    {
                        role: "user",
                        // from user prompt
                        content: prompt,
                    },
                ],
                temperature:0.7,
                max_tokens:tokenMap[length],
            }); 

            const content=response.choices[0].message.content;
            
            await db.execute(
            `INSERT INTO creations (user_id, prompt, content, type)
            VALUES (?, ?, ?, ?)`,
            [userId, prompt, content, "article"]
            );
            
            if(plan !== 'premium'){
                await clerkClient.users.updateUserMetadata(userId,{
                    privateMetadata : {
                        free_usage: free_usage + 1
                    }
                })
            } 
            //  console.log("Response to frontend:", { success: true, content });
            res.json({success:true, content})
    }
    catch(error){
        // console.log("Error generating article:", error.message);
        res.json({success:false, message:error.message})
    }

} 


export const generateBlogTitle=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const {prompt,category}=req.body;
          const plan=req.plan;
          const free_usage=req.free_usage;

          if(plan !== 'premium' && free_usage>=50)
          {
            return res.json({success:false, message:"Limit reached.Upgrade to continue."})
          }

          console.log("Generating Blob title for user:", userId, "with plan:", plan, "and free usage:", free_usage,"prompt:",prompt);
           const response = await AI.chat.completions.create({
                model: "gemini-2.5-flash",
                messages: [{role: "user",
                            // from user prompt
                            content: prompt,
                           }],
                temperature:0.7,
                max_tokens:100,
            }); 

            const content=response.choices[0].message.content;

            await db.execute(
            `INSERT INTO creations (user_id, prompt, content, type)
            VALUES (?, ?, ?, ?)`,
            [userId, prompt, content, "blog-title"]
            );
            
            if(plan !== 'premium'){
                await clerkClient.users.updateUserMetadata(userId,{
                    privateMetadata : {
                        free_usage: free_usage + 1
                    }
                })
            }
            res.json({success:true, content})
    }
    catch(error){
        console.log(error.message)
        res.json({success:false, message:error.message})
    }

}


export const generateImage=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const {prompt,publish}=req.body;
          const plan=req.plan;

        //   if(plan !== 'premium')
        //   {
        //     return res.json({success:false, message:"Limit reached.Upgrade to continue."})
        //   }

           console.log("Generating Image for user:", userId, "with plan:", plan,"prompt:",prompt,"publish:",publish);
             
            //Clip drop API
            const formData = new FormData()
            formData.append('prompt', prompt)
            const {data}=await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, 
                {
                    headers:{'x-api-key': process.env.CLIPDROP_API_KEY,},
                    responseType: 'arraybuffer'
            })

            const base64Image=`data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;
            
            //cloudinary
            const {secure_url}=await cloudinary.uploader.upload(base64Image);

            await db.execute(
            `INSERT INTO creations (user_id, prompt, content, type,publish)
            VALUES (?, ?, ?, ?, ?)`,
            [userId, prompt, secure_url, "image", publish || false]
            );
            
           
            res.json({success:true, content:secure_url})
    }
    catch(error){
        console.log(error.message)
        res.json({success:false, message:error.message})
    }

}



export const removeImageBackground=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const {image}=req.file;
          const plan=req.plan;

        //   if(plan !== 'premium')
        //   {
        //     return res.json({success:false, message:"This feature is only available for premium subscriptions."})
        //   }        
    
            //cloudinary
            const {secure_url}=await cloudinary.uploader.upload(image.path, {
                transformation: [
                    {
                        effect:'background_removal',
                        background_removal: 'remove_the_background'
                    }
                ]
            });

            await db.execute(
            `INSERT INTO creations (user_id, prompt, content, type)
            VALUES (?, ?, ?, ?)`,
            [userId, 'Remove background from image', secure_url, "image"]
            );
                   
            res.json({success:true, content:secure_url})
    }
    catch(error){
        console.log(error.message)
        res.json({success:false, message:error.message})
    }

} 


export const removeImageObject=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const {object} =req.body;
          const {image}=req.file;
          const plan=req.plan;

        //   if(plan !== 'premium')
        //   {
        //     return res.json({success:false, message:"This feature is only available for premium subscriptions."})
        //   }        
    
            //cloudinary
            const {public_id}=await cloudinary.uploader.upload(image.path);

            const imageUrl= cloudinary.url(public_id,{
                transformation: [{ effect:`gen_remove:${object}`}],
                resource_type: 'image'
            })

            await db.execute(
            `INSERT INTO creations (user_id, prompt, content, type)
            VALUES (?, ?, ?, ?)`,
            [userId, `Remove ${object} from image`, imageUrl, "image"]
            );
                   
            res.json({success:true, content:imageUrl})
    }
    catch(error){
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
} 


export const reviewResume=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const resume=req.file;
          const plan=req.plan;

        //   if(plan !== 'premium')
        //   {
        //     return res.json({success:false, message:"This feature is only available for premium subscriptions."})
        //   }        
            
           // Checking resume is greater than 5mb
            if(resume.size > 5*1024*1024){
                   return res.json({success:false, message:"Resume file size exceeds allowed size (5MB)."})
            }
           
            //read file from fs
            const dataBuffer=fs.readFileSync(resume.path)

            //to parse the text from the resume
            const pdfData=await pdf(dataBuffer)
            const prompt=`Review the following resume and provide constructive feedback on its strengths,weaknesses and areas for improvement. 
            Resume Content:\n\n ${pdfData.text}`

            const response = await AI.chat.completions.create({
                model: "gemini-2.5-flash",
                messages: [
                    {
                        role: "user",
                        // from user prompt
                        content: prompt,
                    },
                ],
                temperature:0.7,
                max_tokens:1000,
            }); 

            const content=response.choices[0].message.content;

            await db.execute(
            `INSERT INTO creations (user_id, prompt, content, type)
            VALUES (?, ?, ?, ?)`,
            [userId, prompt, content, "review-resume"]
            );
                   
            res.json({success:true, content:content})
    }
    catch(error){
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}