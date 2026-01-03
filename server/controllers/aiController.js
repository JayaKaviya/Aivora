import OpenAI from "openai";
import db from '../configs/db.js'
import { clerkClient } from "@clerk/express";
import {v2 as cloudinary} from 'cloudinary';
import axios from "axios";

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


export const generateArticle=async(req,res)=>{

    try{  
        //clerk userId
          const {userId}=req.auth(); 
          const {prompt,length}=req.body;
          const plan=req.plan;
          const free_usage=req.free_usage;

          if(plan !== 'premium' && free_usage>=50)
          {
            return res.json({success:false, message:"Limit reached.Upgrade to continue."})
          }

        //   console.log("Generating article for user:", userId, "with plan:", plan, "and free usage:", free_usage,"prompt:",prompt,"length:",length);
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
                max_tokens:length,
            }); 

            const content=response.choices[0].message.content;

            // await db`INSERT INTO creations(user_id,prompt,content, type) 
            // VALUES(${userId}, ${prompt}, ${content},'article')`;

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
        //   const free_usage=req.free_usage;

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

         console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);

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