const router = require('express').Router();
const {
  googleAuth,
  googleCallback,
  loginSuccess,
  loginFailed,
  logout,
  signup,
} = require('../controllers/authController');


// Google OAuth
router.get('/google', googleAuth);
router.get('/google/callback', googleCallback);


router.get('/login/success', loginSuccess);
router.get('/login/failed', loginFailed);


router.get('/logout', logout);

// Email/Password signup
// router.post('/signup', signup);

module.exports = router;
