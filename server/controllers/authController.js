import passport from "passport";

// Google OAuth
export const googleAuth = passport.authenticate("google", [
  "profile",
  "email",
]);

// Google callback 
export const googleCallback = passport.authenticate("google", {
  // successRedirect: process.env.CLIENT_URL,
  successRedirect: `${process.env.CLIENT_URL}/auth`,
  failureRedirect: "/login/failed",
});

// Login success
export const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "Not Authorized",
    });
  }
};

// import jwt from "jsonwebtoken";

// export const loginSuccess = (req, res) => {
//   if (req.user) {
//     // const token = jwt.sign(
//     //   { id: req.user.id, email: req.user.emails[0].value },
//     //   process.env.JWT_SECRET,
//     //   { expiresIn: "1h" }
//     // );

//     res.status(200).json({
//       error: false,
//       message: "Successfully Logged In",
//       user: req.user,
//       token, // <-- this is your JWT
//     });
//   } else {
//     res.status(403).json({ error: true, message: "Not Authorized" });
//   }
// };


// Login failed
export const loginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Login failure",
  });
};

// Logout
export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect(process.env.CLIENT_URL);
  });
};