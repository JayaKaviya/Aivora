import express from "express";
import { serverLive } from "../controllers/controller.js";

const router = express.Router();

router.get("/", serverLive);

export default router;
