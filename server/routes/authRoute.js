import express from "express";
import {registerController,loginController,textController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

//Router Object
const router=express.Router()

// routing
//Register || Method -> POST
router.post("/register",registerController)

//Login || POST
router.post("/login",loginController)

//Text Routers
router.get('/text', requireSignIn,isAdmin,textController)

export default router