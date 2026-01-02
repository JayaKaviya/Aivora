import { Router } from "express";
import {
  googleAuth,
  googleCallback,
  loginSuccess,
  loginFailed,
  logout,
  // signup,
} from "../controllers/authController.js";

const router = Router();


// Google OAuth
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);

router.get("/login/success", loginSuccess);
router.get("/login/failed", loginFailed);

router.get("/logout", logout);

// Email/Password signup
// router.post("/signup", signup);

export default router;
