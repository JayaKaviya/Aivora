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


// export const toggleLikeCreation=async(req,res)=>{
//     try{  

//         const {userId}=req.auth();
//         const {id}=req.body; 

//         const [creation] = await db.execute(`SELECT * FROM creations WHERE id= ?`,[id]);
     
//         if(!creation){
//             return res.json({success:false,message: "Creation not found"})
//         }

//         const currentLikes=creation.likes;
//         const userIdStr=userId.toString();
//         let updatedLikes;
//         let message;
       
//         //if alreday liked, remove it. if not, make it liked 
//         if(currentLikes.includes(userIdStr)){
//             updatedLikes= currentLikes.filter((user)=> user!== userIdStr);
//             message='Creation Unliked'
//         }
//         else{
//             updatedLikes=[...currentLikes,userIdStr];
//             message='Creation Liked'
//         } 

//         // const formattedArray=`{${updatedLikes.json(',')}}`

//         const formattedArray = JSON.stringify(updatedLikes);

//         await db.execute(
//             `UPDATE creations SET likes = ? WHERE id = ?`,
//             [formattedArray, id]
//         );
     
//         res.json({success:true, message});

//     } catch(error)
//     {
//         res.json({success: false, message: error.message});
//     }
// }

export const toggleLikeCreation = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { id } = req.body;

    const [rows] = await db.execute(
      `SELECT likes FROM creations WHERE id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.json({ success: false, message: "Creation not found" });
    }

    // MySQL JSON comes as string → parse it
    let currentLikes = rows[0].likes;

    if (typeof currentLikes === "string") {
      currentLikes = JSON.parse(currentLikes);
    }

    // Safety fallback
    if (!Array.isArray(currentLikes)) {
      currentLikes = [];
    }

    const userIdStr = String(userId);
    let updatedLikes;
    let message;

    if (currentLikes.includes(userIdStr)) {
      updatedLikes = currentLikes.filter(u => u !== userIdStr);
      message = "Creation Unliked";
    } else {
      updatedLikes = [...currentLikes, userIdStr];
      message = "Creation Liked";
    }

    await db.execute(
      `UPDATE creations SET likes = ? WHERE id = ?`,
      [JSON.stringify(updatedLikes), id]
    );

    res.json({ success: true, message });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
