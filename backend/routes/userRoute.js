import express from "express";
import { loginController, registerController } from "../controllers/userController.js";

const userRoute=express.Router();

userRoute.post('/login',loginController);
userRoute.post('/register',registerController);

export default userRoute;