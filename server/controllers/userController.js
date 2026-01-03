import db from '../configs/db.js';

export const getUserCreations=async(req,res)=>{
    try{

       const {userId}=req.auth(); 

        // const creations = await db.execute(`SELECT * FROM creations WHERE user_id = ?
        //     ORDER BY created_at DESC`,[userId]);

         const [creations] = await db.execute(`SELECT * FROM creations WHERE user_id = ?
            ORDER BY created_at DESC`,[userId]);
     
        res.json({success:true, creations});

    } catch(error)
    {
        res.json({success: false, message: error.message});
    }
} 


export const getPublishedCreations=async(req,res)=>{
    try{

         const [creations] = await db.execute(`SELECT * FROM creations WHERE publish=true
            ORDER BY created_at DESC`);
     
        res.json({success:true, creations});

    } catch(error)
    {
        res.json({success: false, message: error.message});
    }
} 


export const toggleLikeCreation=async(req,res)=>{
    try{  

        const {userId}=req.auth();
        const {id}=req.body; 

        const [creation] = await db.execute(`SELECT * FROM creations WHERE id= ?`,[id]);
     
        if(!creations){
            return res.json({success:false,message: "Creation not found"})
        }

        const currentLikes=creation.likes;
        const userIdStr=userId.toString();
        let updatedLikes;
        let message;
       
        //if alreday liked, remove it. if not, make it liked 
        if(currentLikes.includes(userIdStr)){
            updatedLikes= currentLikes.filter((user)=> user!== userIdStr);
            message='Creation Unliked'
        }
        else{
            updatedLikes=[...currentLikes,userIdStr];
            message='Creation Liked'
        } 

        // const formattedArray=`{${updatedLikes.json(',')}}`

        const formattedArray = JSON.stringify(updatedLikes);

        await db.execute(
            `UPDATE creations SET likes = ? WHERE id = ?`,
            [formattedArray, id]
        );
     
        res.json({success:true, message});

    } catch(error)
    {
        res.json({success: false, message: error.message});
    }
}