const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const passport =require('passport'); 

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope : ['profile', 'email']
    },
    function(accessToken, refreshToken, profile, callback){
      // profile contains user info from Google
      // In real app, you could save user info in DB here
      callback(null, profile);
    }
  )
); 


// 5️⃣ Serialize & Deserialize user
passport.serializeUser((user, done) => {
  done(null, user); // store entire user in session (or just user ID in real app)
}); 

passport.deserializeUser((user, done) => {
  done(null, user); // retrieve user from session
});
