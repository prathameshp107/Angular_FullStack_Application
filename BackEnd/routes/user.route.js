import express from "express";
const router = express.Router();

// Controllers
import { registerUser, loginUser } from "../controllers/user.controller.js";


// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);



export default router;