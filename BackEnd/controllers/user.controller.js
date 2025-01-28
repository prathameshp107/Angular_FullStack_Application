import RegisterUser from "../models/user.model.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET_Key } from "../config/config.js";


export const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const existingUser = await RegisterUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new RegisterUser({ firstname, lastname, email, password: hashedPassword });
        let result = await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error in registering user" });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await RegisterUser.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) { 
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_Key, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token , user: existingUser });   
    } catch (error) {   
        res.status(500).json({ message: "Error in logging in user" });
    }
}