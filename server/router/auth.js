const router=require('express').Router();
const passport = require('passport');


router.get('/google',
    passport.authenticate('google',['profile','email'])
) 

router.get('/google/callback',
    passport.authenticate('google',{
        successRedirect:process.env.CLIENT_URL,
        failureRedirect:"/login/failed"
    })
) 

router.get('/login/success',(req,res)=>{
   if(res.user){
    res.status(200).json({
        error:false,
        message:"Succsessfully Logged In",
        user:req.user
    })
   } 
   else{
    res.status(403).status({ error : true,message:"Not Authorized"})
   }
});

router.get('/login/failed',(req,res)=>{
    res.status(401).json({
        error:true,
        message:"Login failure"
    })
}

)


router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL);
})