const passport = require('passport');

// Google OAuth
exports.googleAuth = passport.authenticate('google', ['profile', 'email']);

// Google callback 
exports.googleCallback = passport.authenticate('google', {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: '/login/failed',
});

// Login success
exports.loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: 'Successfully Logged In',
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: 'Not Authorized' });
  }
};

// Login failed
exports.loginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: 'Login failure',
  });
};

// Logout
exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect(process.env.CLIENT_URL);
  });
};
