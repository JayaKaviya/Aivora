import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      // profile contains user info (photo, name, etc) from Google
      // In app, you could save user info in DB here
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
